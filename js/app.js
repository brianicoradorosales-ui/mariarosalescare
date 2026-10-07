(function () {
  "use strict";
  var CFG = window.SITE_CONFIG || {};
  var LS_KEY = "maria-caregiver-stories-v1";
  function t(key) { return (window.I18N && window.I18N.t) ? window.I18N.t(key) : key; }
  function lang() { return (window.I18N && window.I18N.current) || "en"; }

  /* ---------------- Storage adapter ---------------- */
  var StoryStore = {
    loadLocal: function () {
      try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch (e) { return []; }
    },
    saveLocal: function (stories) {
      try { localStorage.setItem(LS_KEY, JSON.stringify(stories)); return true; }
      catch (e) { return false; }
    },
    loadRemote: function () {
      if (!CFG.STORIES_FEED_URL) return Promise.resolve([]);
      return fetch(CFG.STORIES_FEED_URL, { headers: { Accept: "application/json" } })
        .then(function (r) { return r.ok ? r.json() : []; })
        .catch(function () { return []; });
    },
    submitRemote: function (story) {
      if (!CFG.STORY_ENDPOINT) return Promise.resolve({ skipped: true });
      var fd = new FormData();
      ["name", "relationship", "city", "lovedOne", "rating", "message", "date"].forEach(function (k) {
        fd.append(k, story[k] == null ? "" : String(story[k]));
      });
      if (story._file) fd.append("photo", story._file, story._file.name);
      return fetch(CFG.STORY_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return { ok: true }; });
    },
    add: function (story) {
      var local = this.loadLocal();
      var clean = Object.assign({}, story); delete clean._file;
      local.unshift(clean);
      var saved = this.saveLocal(local);
      if (!saved && clean.photo) {
        clean.photo = ""; local[0] = clean; saved = this.saveLocal(local);
      }
      return { saved: saved, story: clean };
    },
    remove: function (id) {
      this.saveLocal(this.loadLocal().filter(function (s) { return s.id !== id; }));
    }
  };

  /* ---------------- Helpers ---------------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function starsText(n) { n = Math.max(1, Math.min(5, +n || 5)); return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n); }
  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso); if (isNaN(d)) return "";
    var locale = lang() === "es" ? "es" : "en-US";
    return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  }
  function initialsOf(name) {
    var parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "♥";
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }
  function translateRel(rel) {
    if (!rel) return "";
    var key = "rel." + rel;
    var translated = t(key);
    return translated === key ? rel : translated;
  }
  function storyMessage(s) {
    if (lang() === "es" && s.message_es) return s.message_es;
    return s.message || "";
  }
  function displayName(s) {
    if (!s.sample) return s.name;
    var key = "rel." + s.name;
    var translated = t(key);
    return translated === key ? s.name : translated;
  }

  /* ---------------- Testimonials wall ---------------- */
  var wall = document.getElementById("wall");
  var emptyMsg = document.getElementById("wall-empty");
  var currentFilter = "all";
  var remoteStories = [];

  function allStories() {
    var local = StoryStore.loadLocal().map(function (s) { s._local = true; return s; });
    var base = remoteStories.length ? remoteStories : (CFG.SHOW_SAMPLE_TESTIMONIALS === false ? [] : (window.SAMPLE_TESTIMONIALS || []));
    return local.concat(base);
  }

  function card(s, idx) {
    var c = el("article", "t-card" + (s.sample ? " is-sample" : "") + (s._local ? " is-local" : ""));
    c.dataset.id = s.id;
    c.style.setProperty("--tilt", ((idx % 3) - 1) * 0.6 + "deg");
    if (s.sample) {
      c.appendChild(el("p", "sample-badge", t("js.sampleBadge")));
    } else if (s._local) {
      c.appendChild(el("p", "local-badge", t("js.localBadge")));
    }
    if (s.photo) {
      var fig = el("figure", "t-photo");
      var img = el("img"); img.src = s.photo; img.loading = "lazy";
      img.alt = t("js.photoBy") + (s.name || t("js.aFamily"));
      fig.appendChild(img); c.appendChild(fig);
    }
    var st = el("p", "t-stars", starsText(s.rating));
    st.setAttribute("aria-label", (s.rating || 5) + t("js.starsOutOf"));
    c.appendChild(st);
    var q = el("blockquote", "t-quote");
    q.appendChild(el("p", null, "“" + storyMessage(s) + "”"));
    c.appendChild(q);

    var who = el("div", "t-who");
    who.appendChild(el("span", "t-avatar", s.sample ? "♥" : initialsOf(s.name))).setAttribute("aria-hidden", "true");
    var meta = el("div", "t-meta");
    var nameLine = s.sample ? (displayName(s) + ", " + (s.city || "[City]")) : (s.name + (s.city ? ", " + s.city : ""));
    meta.appendChild(el("strong", null, nameLine));
    if (s.relationship) meta.appendChild(el("span", null, translateRel(s.relationship)));
    if (s.lovedOne && s.relationship !== "I was the client") meta.appendChild(el("span", "t-loved", t("js.lovedOne") + s.lovedOne));
    if (s.date) meta.appendChild(el("span", "t-date", fmtDate(s.date)));
    who.appendChild(meta);
    c.appendChild(who);

    if (s._local) {
      var rm = el("button", "t-remove", t("js.remove"));
      rm.type = "button";
      rm.setAttribute("aria-label", t("js.removeAria"));
      rm.addEventListener("click", function () {
        if (confirm(t("js.removeConfirm"))) { StoryStore.remove(s.id); renderWall(); }
      });
      c.appendChild(rm);
    }
    return c;
  }

  function renderWall(highlightId) {
    var list = allStories();
    if (currentFilter === "photo") list = list.filter(function (s) { return !!s.photo; });
    if (currentFilter === "new") list = list.filter(function (s) { return !s.sample; });
    wall.innerHTML = "";
    list.forEach(function (s, i) { wall.appendChild(card(s, i)); });
    emptyMsg.hidden = list.length > 0;
    if (highlightId) {
      var h = wall.querySelector('[data-id="' + highlightId + '"]');
      if (h) {
        h.classList.add("is-highlight");
        h.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "center" });
        setTimeout(function () { h.classList.remove("is-highlight"); }, 4000);
      }
    }
  }

  document.querySelectorAll(".filter-group .chip").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filter-group .chip").forEach(function (x) {
        x.classList.remove("is-active"); x.setAttribute("aria-pressed", "false");
      });
      b.classList.add("is-active"); b.setAttribute("aria-pressed", "true");
      currentFilter = b.dataset.filter; renderWall();
    });
  });

  /* ---------------- Share-your-story form ---------------- */
  var form = document.getElementById("story-form");
  var errBox = document.getElementById("form-error");
  var statusBox = document.getElementById("form-status");
  var msg = document.getElementById("f-message");
  var count = document.getElementById("char-count");
  var photoInput = document.getElementById("f-photo");
  var preview = document.getElementById("photo-preview");
  var photoData = "";
  var photoFile = null;

  msg.addEventListener("input", function () { count.textContent = msg.value.length; });

  function resizeImage(file, maxSide) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var scale = Math.min(1, maxSide / Math.max(img.width, img.height));
          var cv = document.createElement("canvas");
          cv.width = Math.round(img.width * scale); cv.height = Math.round(img.height * scale);
          cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
          resolve(cv.toDataURL("image/jpeg", 0.8));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  photoInput.addEventListener("change", function () {
    var f = photoInput.files && photoInput.files[0];
    photoData = ""; photoFile = null; preview.hidden = true;
    if (!f) return;
    if (!/^image\//.test(f.type)) { showError(t("js.errImage")); photoInput.value = ""; return; }
    photoFile = f;
    resizeImage(f, 800).then(function (data) {
      photoData = data; preview.src = data; preview.hidden = false;
    }).catch(function () { showError(t("js.errPhotoRead")); });
  });

  function showError(text) { errBox.textContent = text; errBox.hidden = !text; }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showError(""); statusBox.textContent = "";
    var f = form.elements;
    var problems = [];
    var firstBad = null;
    function bad(field, text) { problems.push(text); field.setAttribute("aria-invalid", "true"); firstBad = firstBad || field; }
    [f.name, f.relationship, f.message, f.consent].forEach(function (x) { x.removeAttribute("aria-invalid"); });
    if (!f.name.value.trim()) bad(f.name, t("js.errName"));
    if (!f.relationship.value) bad(f.relationship, t("js.errRel"));
    if (f.message.value.trim().length < 10) bad(f.message, t("js.errMsg"));
    if (!f.consent.checked) bad(f.consent, t("js.errConsent"));
    if (problems.length) { showError(problems.join(" ")); firstBad.focus(); return; }

    var story = {
      id: "local-" + Date.now(),
      sample: false,
      name: f.name.value.trim(),
      relationship: f.relationship.value,
      city: f.city.value.trim(),
      lovedOne: f.lovedOne.value.trim(),
      rating: +(form.querySelector('input[name="rating"]:checked') || { value: 5 }).value,
      message: f.message.value.trim(),
      photo: photoData,
      date: new Date().toISOString(),
      _file: photoFile
    };

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    StoryStore.submitRemote(story)
      .catch(function () { return { failed: true }; })
      .then(function (remote) {
        var res = StoryStore.add(story);
        form.reset(); count.textContent = "0"; photoData = ""; photoFile = null; preview.hidden = true;
        btn.disabled = false;
        var text = t("js.thanks");
        if (remote && remote.failed) text += t("js.thanksOffline");
        if (res.saved && !res.story.photo && story.photo) text += t("js.thanksPhotoSkip");
        if (!res.saved) text = t("js.thanksNoSave");
        statusBox.textContent = text;
        currentFilter = "all";
        document.querySelectorAll(".filter-group .chip").forEach(function (x) {
          var on = x.dataset.filter === "all"; x.classList.toggle("is-active", on); x.setAttribute("aria-pressed", String(on));
        });
        if (res.saved) renderWall(res.story.id);
        else { var c = card(Object.assign({ _local: true }, res.story), 0); wall.prepend(c); c.scrollIntoView({ block: "center" }); }
      });
  });

  /* ---------------- Gallery + lightbox ---------------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbCap = document.getElementById("lightbox-cap");
  function openDialog(d) { if (d.showModal) d.showModal(); else d.setAttribute("open", ""); }
  function closeDialog(d) { if (d.close) d.close(); else d.removeAttribute("open"); }

  function buildGallery() {
    var ca = document.getElementById("gallery-ca");
    var us = document.getElementById("gallery-us");
    if (ca) ca.innerHTML = "";
    if (us) us.innerHTML = "";
    (window.STATE_PHOTOS || []).forEach(function (p) {
      var grid = document.getElementById(p.group === "ca" ? "gallery-ca" : "gallery-us");
      if (!grid) return;
      var fig = el("figure", "photo-card");
      var btn = el("button", "photo-btn"); btn.type = "button";
      btn.setAttribute("aria-label", t("js.viewLarger") + p.place + ", " + p.state);
      var img = el("img"); img.src = p.src; img.alt = p.alt; img.loading = "lazy";
      btn.appendChild(img);
      btn.appendChild(el("span", "state-tag", p.state));
      fig.appendChild(btn);
      var cap = el("figcaption");
      cap.appendChild(el("strong", null, p.place));
      var cr = el("small", "credit");
      cr.appendChild(document.createTextNode(t("js.photoCredit") + p.credit + " · "));
      var a = el("a", null, p.license); a.href = p.source; a.target = "_blank"; a.rel = "noopener";
      cr.appendChild(a);
      cap.appendChild(cr);
      fig.appendChild(cap);
      btn.addEventListener("click", function () {
        lbImg.src = p.src; lbImg.alt = p.alt;
        lbCap.textContent = p.place + ", " + p.state + " — " + t("js.photoCredit") + p.credit + " (" + p.license + ")";
        openDialog(lb);
      });
      grid.appendChild(fig);
    });
  }
  buildGallery();
  lb.querySelector(".lightbox-close").addEventListener("click", function () { closeDialog(lb); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeDialog(lb); });

  var credits = document.getElementById("credits");
  var creditsList = document.getElementById("credits-list");
  (window.STATE_PHOTOS || []).forEach(function (p) {
    var li = el("li");
    li.appendChild(document.createTextNode(p.place + ", " + p.state + " — " + p.credit + ", "));
    var a = el("a", null, p.license + " (Wikimedia Commons)"); a.href = p.source; a.target = "_blank"; a.rel = "noopener";
    li.appendChild(a); creditsList.appendChild(li);
  });
  document.getElementById("credits-open").addEventListener("click", function (e) { e.preventDefault(); openDialog(credits); });
  document.getElementById("credits-close").addEventListener("click", function () { closeDialog(credits); });

  /* ---------------- Nav ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
  });

  function prefersReduced() { return window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches; }

  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
          links[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }

  var yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------------- i18n init + re-render ---------------- */
  if (window.I18N) window.I18N.init();
  document.addEventListener("i18n:change", function () {
    renderWall();
    buildGallery();
  });

  /* ---------------- Init ---------------- */
  renderWall();
  StoryStore.loadRemote().then(function (r) {
    if (Array.isArray(r) && r.length) { remoteStories = r; renderWall(); }
  });
})();
