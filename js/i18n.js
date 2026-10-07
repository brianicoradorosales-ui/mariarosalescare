/**
 * Client-side EN/ES translations. Toggle in header; choice saved in localStorage.
 * Use data-i18n="key" for textContent, data-i18n-html for innerHTML,
 * data-i18n-placeholder / data-i18n-aria-label / data-i18n-title / data-i18n-alt for attrs.
 */
(function () {
  "use strict";
  var LANG_KEY = "maria-caregiver-lang";
  var CFG = window.SITE_CONFIG || {};
  var phone = CFG.PHONE_DISPLAY || "(818) 927-5356";
  var email = CFG.EMAIL || "rosalesnari69@gmail.com";

  var STRINGS = {
    en: {
      "meta.title": "Maria Rosales — Caring, Dependable Caregiver | Call " + phone,
      "meta.description": "Maria Rosales is a caring, dependable caregiver offering companionship, personal care help, meal preparation, medication reminders, mobility help and respite for families. Call " + phone + ".",
      "meta.ogDescription": "Compassionate in-home care for your loved one. Read what families say, and call " + phone + ".",
      "skip": "Skip to main content",
      "brand.aria": "Maria Rosales, back to top",
      "brand.role": "Caregiver",
      "nav.toggle": "Menu",
      "nav.main": "Main",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.stories": "Family Stories",
      "nav.share": "Share Your Story",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "nav.call": "📞 " + phone,
      "lang.label": "Language",
      "lang.en": "EN",
      "lang.es": "ES",
      "hero.eyebrow": "Compassionate in-home care",
      "hero.headline": "A caring, dependable caregiver who treats your loved one like family.",
      "hero.sub": "Companionship, everyday personal care help, and peace of mind for the whole family — with patience, respect and a warm smile.",
      "hero.callHtml": "Call Maria<br><strong>" + phone + "</strong>",
      "hero.emailBtn": "Email Maria",
      "hero.trust": "Highlights",
      "hero.chip1": "💛 Patient & kind",
      "hero.chip2": "🤝 Respectful of dignity",
      "hero.chip3": "🏡 Care at home",
      "hero.chip4": "📞 Easy to reach",
      "hero.quoteStrong": "Hear from families",
      "hero.quoteSpan": "Read stories about loved ones Maria has cared for →",
      "hero.photoCap": "California poppies, Antelope Valley",
      "about.eyebrow": "About me",
      "about.title": "Hello, I’m Maria.",
      "about.lead": "I help older adults and people who need a little extra support live safely, comfortably and with dignity at home — and I help their families rest easier knowing someone caring is there.",
      "about.p2": "Every person I care for has their own story, routines and preferences. I take the time to listen, get to know your loved one, and give care the way they like it — with patience, honesty and genuine kindness. Families can always reach me, and I keep you updated on how things are going.",
      "about.creds": "Credentials and details",
      "about.credsTitle": "Experience & credentials",
      "about.ph1": "[Add your certifications — e.g., CPR/First Aid, HHA, CNA]",
      "about.ph2": "[Add your years of caregiving experience]",
      "about.ph3": "[Add your service area — cities/neighborhoods you serve]",
      "about.ph4": "[Add languages you speak]",
      "about.ph5": "[Add availability — days, hours, live-in or hourly]",
      "about.call": "📞 Call " + phone,
      "about.save": "💾 Save my contact",
      "about.photoAria": "Placeholder for Maria's photo",
      "about.photoLabel": "[Add your photo]",
      "services.eyebrow": "How I can help",
      "services.title": "Care that fits your loved one’s day",
      "services.intro": "Support can be as light or as hands-on as your family needs. Here’s what I can help with:",
      "svc.comp.title": "Companionship",
      "svc.comp.desc": "Friendly conversation, games, walks, reading, hobbies and simply being there — so no one feels alone.",
      "svc.personal.title": "Personal care help",
      "svc.personal.desc": "Gentle, respectful help with bathing, dressing, grooming and other daily routines.",
      "svc.meal.title": "Meal preparation",
      "svc.meal.desc": "Healthy, tasty meals prepared to your loved one’s tastes and dietary needs, plus help at mealtimes.",
      "svc.med.title": "Medication reminders",
      "svc.med.desc": "Friendly reminders to take medications on schedule, following the plan from their doctor and family.",
      "svc.mob.title": "Mobility help",
      "svc.mob.desc": "Steady support getting up, moving around the home, and staying safe to help prevent falls.",
      "svc.respite.title": "Respite for families",
      "svc.respite.desc": "Take a break, go to work, or rest — knowing your loved one is in caring hands while you’re away.",
      "svc.house.title": "Light housekeeping",
      "svc.house.desc": "Tidying up, laundry, and keeping the home clean, safe and comfortable.",
      "svc.errands.title": "Errands & appointments",
      "svc.errands.desc": "Help with groceries, errands and getting to appointments.",
      "svc.errands.ph": "[Confirm if you provide transportation]",
      "services.note": "Services are non-medical support.",
      "services.notePh": "[Adjust this list to match exactly what you offer.]",
      "steps.title": "Getting started is simple",
      "steps.1.title": "Call or email",
      "steps.1.desc": "Tell me about your loved one and what kind of help you’re looking for.",
      "steps.2.title": "Get to know each other",
      "steps.2.desc": "We talk about routines, preferences, and any concerns — no question is too small.",
      "steps.3.title": "Care begins",
      "steps.3.desc": "I provide care with kindness and keep your family updated along the way.",
      "stories.eyebrow": "Family stories",
      "stories.title": "What families say about Maria",
      "stories.intro": "Kind words from families — past and present — about the care their loved ones received.",
      "stories.filter": "Filter stories",
      "stories.filterAll": "All stories",
      "stories.filterPhoto": "With photos",
      "stories.filterNew": "Newest shared",
      "stories.shareBtn": "✍️ Share your story",
      "stories.voiceBtn": "🎙️ Call to leave a voice testimonial",
      "stories.empty": "No stories match this filter yet.",
      "share.eyebrow": "Share your story",
      "share.title": "Has Maria cared for someone you love?",
      "share.lead": "Your words help other families feel confident choosing care. Tell us about your loved one and your experience.",
      "share.voiceTitle": "🎙️ Prefer to talk?",
      "share.voiceDesc": "Call and leave a voice testimonial — just say your name, your relationship to your loved one, and a few words about the care.",
      "share.voiceCall": "📞 Call " + phone,
      "form.name": "Your name",
      "form.nameHint": "You can use first name and last initial.",
      "form.namePh": "e.g., Maria G.",
      "form.relationship": "Relationship to your loved one",
      "form.relChoose": "Choose one…",
      "form.rel.son": "Son",
      "form.rel.daughter": "Daughter",
      "form.rel.spouse": "Spouse / Partner",
      "form.rel.grandchild": "Grandchild",
      "form.rel.niece": "Niece / Nephew",
      "form.rel.friend": "Friend / Neighbor",
      "form.rel.client": "I was the client",
      "form.rel.other": "Other family member",
      "form.city": "City",
      "form.optional": "(optional)",
      "form.cityPh": "e.g., Bakersfield",
      "form.loved": "Loved one’s first name",
      "form.lovedPh": "e.g., Mom, Grandpa Joe",
      "form.rating": "Your rating",
      "form.star5": "5 stars",
      "form.star4": "4 stars",
      "form.star3": "3 stars",
      "form.star2": "2 stars",
      "form.star1": "1 star",
      "form.message": "Your message",
      "form.messagePh": "How did Maria help your loved one and your family?",
      "form.chars": "characters",
      "form.photo": "Add a photo",
      "form.photoTap": "Tap to choose a photo",
      "form.photoHint": "Only share photos you have permission to share.",
      "form.photoPreview": "Selected photo preview",
      "form.consent": "I agree that my comment (and photo, if added) may be shown on this website.",
      "form.submit": "💛 Post my story",
      "form.demo": "Demo mode: stories are saved in this browser only until the site is connected to a backend.",
      "gallery.eyebrow": "Gallery",
      "gallery.title": "Beautiful places across the states",
      "gallery.intro": "Starting at home in California — and a few favorite places around the country.",
      "gallery.ca": "California",
      "gallery.us": "Around the U.S.",
      "gallery.moments": "Caregiving moments",
      "gallery.ph": "Your caregiving photos here",
      "gallery.note": "Only post photos of clients with their (or their family’s) written permission.",
      "contact.eyebrow": "Let’s talk",
      "contact.title": "Looking for a caring caregiver for your loved one?",
      "contact.desc": "Call or email Maria today. Tell her about your loved one, and she’ll talk with you about how she can help.",
      "contact.call": "📞 Call " + phone,
      "contact.emailBtn": "✉️ Email Maria",
      "contact.hours": "[Add your hours of availability]",
      "footer.tagline": "Caregiver · Companionship & in-home support",
      "footer.links": "Quick links",
      "footer.credits": "Photo credits",
      "footer.creditsText": "State photos from Wikimedia Commons under Creative Commons / public-domain licenses. Photographer and license are listed on each photo and in the ",
      "footer.creditsLink": "full credits",
      "footer.rights": "Maria Rosales. All rights reserved.",
      "footer.backTop": "↑ Back to top",
      "footer.nav": "Footer",
      "cta.aria": "Quick contact",
      "cta.call": "📞 Call Maria",
      "cta.email": "✉️ Email",
      "lightbox.aria": "Photo viewer",
      "lightbox.close": "Close photo",
      "credits.title": "Photo credits",
      "credits.close": "Close",
      "js.sampleBadge": "Sample testimonial — replace with real family comments",
      "js.localBadge": "New · shared on this device",
      "js.lovedOne": "Loved one: ",
      "js.remove": "Remove",
      "js.removeAria": "Remove this story from this device",
      "js.removeConfirm": "Remove this story from this device?",
      "js.starsOutOf": " out of 5 stars",
      "js.photoBy": "Photo shared by ",
      "js.aFamily": "a family member",
      "js.viewLarger": "View larger: ",
      "js.photoCredit": "Photo: ",
      "js.errImage": "Please choose an image file.",
      "js.errPhotoRead": "Sorry, that photo couldn't be read. Try another one.",
      "js.errName": "Please enter your name.",
      "js.errRel": "Please choose your relationship to your loved one.",
      "js.errMsg": "Please write a message (at least 10 characters).",
      "js.errConsent": "Please check the box to allow your story to be shown.",
      "js.thanks": "Thank you! Your story has been added to the wall. 💛",
      "js.thanksOffline": " (It couldn't be sent online right now, but it's saved on this device.)",
      "js.thanksPhotoSkip": " The photo was too large to save in demo mode.",
      "js.thanksNoSave": "Thank you! Your story is shown below, but this browser couldn't save it.",
      "rel.Son": "Son",
      "rel.Daughter": "Daughter",
      "rel.Spouse / Partner": "Spouse / Partner",
      "rel.Grandchild": "Grandchild",
      "rel.Niece / Nephew": "Niece / Nephew",
      "rel.Friend / Neighbor": "Friend / Neighbor",
      "rel.I was the client": "I was the client",
      "rel.Other family member": "Other family member",
      "rel.Family member": "Family member",
      "rel.Client": "Client"
    },
    es: {
      "meta.title": "Maria Rosales — Cuidadora cariñosa y confiable | Llame al " + phone,
      "meta.description": "Maria Rosales es una cuidadora cariñosa y confiable que ofrece compañía, ayuda con el cuidado personal, preparación de comidas, recordatorios de medicamentos, ayuda con la movilidad y descanso para las familias. Llame al " + phone + ".",
      "meta.ogDescription": "Cuidado en el hogar con compasión para su ser querido. Lea lo que dicen las familias y llame al " + phone + ".",
      "skip": "Saltar al contenido principal",
      "brand.aria": "Maria Rosales, volver arriba",
      "brand.role": "Cuidadora",
      "nav.toggle": "Menú",
      "nav.main": "Principal",
      "nav.about": "Sobre mí",
      "nav.services": "Servicios",
      "nav.stories": "Historias de familias",
      "nav.share": "Comparta su historia",
      "nav.gallery": "Galería",
      "nav.contact": "Contacto",
      "nav.call": "📞 " + phone,
      "lang.label": "Idioma",
      "lang.en": "EN",
      "lang.es": "ES",
      "hero.eyebrow": "Cuidado en el hogar con compasión",
      "hero.headline": "Una cuidadora cariñosa y confiable que trata a su ser querido como familia.",
      "hero.sub": "Compañía, ayuda cotidiana con el cuidado personal y tranquilidad para toda la familia — con paciencia, respeto y una sonrisa cálida.",
      "hero.callHtml": "Llamar a Maria<br><strong>" + phone + "</strong>",
      "hero.emailBtn": "Escribir a Maria",
      "hero.trust": "Destacados",
      "hero.chip1": "💛 Paciente y amable",
      "hero.chip2": "🤝 Respeta la dignidad",
      "hero.chip3": "🏡 Cuidado en casa",
      "hero.chip4": "📞 Fácil de contactar",
      "hero.quoteStrong": "Escuche a las familias",
      "hero.quoteSpan": "Lea historias sobre seres queridos que Maria ha cuidado →",
      "hero.photoCap": "Amapolas de California, Valle del Antílope",
      "about.eyebrow": "Sobre mí",
      "about.title": "Hola, soy Maria.",
      "about.lead": "Ayudo a adultos mayores y a personas que necesitan un poco más de apoyo a vivir con seguridad, comodidad y dignidad en casa — y ayudo a sus familias a sentirse más tranquilas sabiendo que hay alguien cariñoso a su lado.",
      "about.p2": "Cada persona a la que cuido tiene su propia historia, rutinas y preferencias. Me tomo el tiempo de escuchar, conocer a su ser querido y brindar el cuidado como a ellos les gusta — con paciencia, honestidad y verdadera amabilidad. Las familias siempre pueden contactarme, y las mantengo al tanto de cómo van las cosas.",
      "about.creds": "Credenciales y detalles",
      "about.credsTitle": "Experiencia y credenciales",
      "about.ph1": "[Agregue sus certificaciones — p. ej., RCP/Primeros auxilios, HHA, CNA]",
      "about.ph2": "[Agregue sus años de experiencia como cuidadora]",
      "about.ph3": "[Agregue su área de servicio — ciudades/barrios que atiende]",
      "about.ph4": "[Agregue los idiomas que habla]",
      "about.ph5": "[Agregue disponibilidad — días, horas, interna o por horas]",
      "about.call": "📞 Llamar " + phone,
      "about.save": "💾 Guardar mi contacto",
      "about.photoAria": "Espacio para la foto de Maria",
      "about.photoLabel": "[Agregue su foto]",
      "services.eyebrow": "Cómo puedo ayudar",
      "services.title": "Cuidado que se adapta al día de su ser querido",
      "services.intro": "El apoyo puede ser ligero o más cercano, según lo que su familia necesite. Esto es en lo que puedo ayudar:",
      "svc.comp.title": "Compañía",
      "svc.comp.desc": "Conversación amable, juegos, paseos, lectura, pasatiempos y simplemente estar ahí — para que nadie se sienta solo.",
      "svc.personal.title": "Ayuda con el cuidado personal",
      "svc.personal.desc": "Ayuda gentil y respetuosa con el baño, vestirse, el arreglo personal y otras rutinas diarias.",
      "svc.meal.title": "Preparación de comidas",
      "svc.meal.desc": "Comidas saludables y sabrosas según el gusto y las necesidades dietéticas de su ser querido, más ayuda a la hora de comer.",
      "svc.med.title": "Recordatorios de medicamentos",
      "svc.med.desc": "Recordatorios amables para tomar los medicamentos a tiempo, siguiendo el plan del médico y la familia.",
      "svc.mob.title": "Ayuda con la movilidad",
      "svc.mob.desc": "Apoyo firme para levantarse, moverse por la casa y mantenerse seguro, ayudando a prevenir caídas.",
      "svc.respite.title": "Descanso para las familias",
      "svc.respite.desc": "Tómese un descanso, vaya al trabajo o descanse — sabiendo que su ser querido está en buenas manos mientras usted no está.",
      "svc.house.title": "Limpieza ligera",
      "svc.house.desc": "Ordenar, lavar la ropa y mantener el hogar limpio, seguro y cómodo.",
      "svc.errands.title": "Mandados y citas",
      "svc.errands.desc": "Ayuda con las compras, mandados y llegar a las citas.",
      "svc.errands.ph": "[Confirme si ofrece transporte]",
      "services.note": "Los servicios son de apoyo no médico.",
      "services.notePh": "[Ajuste esta lista para que coincida exactamente con lo que ofrece.]",
      "steps.title": "Empezar es sencillo",
      "steps.1.title": "Llame o escriba",
      "steps.1.desc": "Cuénteme sobre su ser querido y qué tipo de ayuda busca.",
      "steps.2.title": "Conozcámonos",
      "steps.2.desc": "Hablamos de rutinas, preferencias y cualquier inquietud — ninguna pregunta es demasiado pequeña.",
      "steps.3.title": "Comienza el cuidado",
      "steps.3.desc": "Brindo el cuidado con amabilidad y mantengo a su familia informada en el camino.",
      "stories.eyebrow": "Historias de familias",
      "stories.title": "Lo que las familias dicen de Maria",
      "stories.intro": "Palabras amables de familias — pasadas y presentes — sobre el cuidado que recibieron sus seres queridos.",
      "stories.filter": "Filtrar historias",
      "stories.filterAll": "Todas",
      "stories.filterPhoto": "Con fotos",
      "stories.filterNew": "Más recientes",
      "stories.shareBtn": "✍️ Comparta su historia",
      "stories.voiceBtn": "🎙️ Llame para dejar un testimonio de voz",
      "stories.empty": "Aún no hay historias con este filtro.",
      "share.eyebrow": "Comparta su historia",
      "share.title": "¿Maria cuidó a alguien a quien usted quiere?",
      "share.lead": "Sus palabras ayudan a otras familias a sentirse seguras al elegir cuidado. Cuéntenos sobre su ser querido y su experiencia.",
      "share.voiceTitle": "🎙️ ¿Prefiere hablar?",
      "share.voiceDesc": "Llame y deje un testimonio de voz — diga su nombre, su relación con su ser querido y unas palabras sobre el cuidado.",
      "share.voiceCall": "📞 Llamar " + phone,
      "form.name": "Su nombre",
      "form.nameHint": "Puede usar nombre y la inicial del apellido.",
      "form.namePh": "p. ej., María G.",
      "form.relationship": "Relación con su ser querido",
      "form.relChoose": "Elija una…",
      "form.rel.son": "Hijo",
      "form.rel.daughter": "Hija",
      "form.rel.spouse": "Cónyuge / Pareja",
      "form.rel.grandchild": "Nieto / Nieta",
      "form.rel.niece": "Sobrino / Sobrina",
      "form.rel.friend": "Amigo / Vecino",
      "form.rel.client": "Yo era el cliente",
      "form.rel.other": "Otro familiar",
      "form.city": "Ciudad",
      "form.optional": "(opcional)",
      "form.cityPh": "p. ej., Bakersfield",
      "form.loved": "Nombre de su ser querido",
      "form.lovedPh": "p. ej., Mamá, Abuelo José",
      "form.rating": "Su calificación",
      "form.star5": "5 estrellas",
      "form.star4": "4 estrellas",
      "form.star3": "3 estrellas",
      "form.star2": "2 estrellas",
      "form.star1": "1 estrella",
      "form.message": "Su mensaje",
      "form.messagePh": "¿Cómo ayudó Maria a su ser querido y a su familia?",
      "form.chars": "caracteres",
      "form.photo": "Agregar una foto",
      "form.photoTap": "Toque para elegir una foto",
      "form.photoHint": "Solo comparta fotos para las que tenga permiso.",
      "form.photoPreview": "Vista previa de la foto seleccionada",
      "form.consent": "Acepto que mi comentario (y la foto, si la agrego) pueda mostrarse en este sitio web.",
      "form.submit": "💛 Publicar mi historia",
      "form.demo": "Modo demo: las historias se guardan solo en este navegador hasta que el sitio se conecte a un servidor.",
      "gallery.eyebrow": "Galería",
      "gallery.title": "Lugares hermosos en los estados",
      "gallery.intro": "Empezando en casa en California — y algunos lugares favoritos del país.",
      "gallery.ca": "California",
      "gallery.us": "Por los EE. UU.",
      "gallery.moments": "Momentos de cuidado",
      "gallery.ph": "Sus fotos de cuidado aquí",
      "gallery.note": "Solo publique fotos de clientes con el permiso escrito de ellos (o de su familia).",
      "contact.eyebrow": "Hablemos",
      "contact.title": "¿Busca una cuidadora cariñosa para su ser querido?",
      "contact.desc": "Llame o escriba a Maria hoy. Cuéntele sobre su ser querido y ella hablará con usted sobre cómo puede ayudar.",
      "contact.call": "📞 Llamar " + phone,
      "contact.emailBtn": "✉️ Escribir a Maria",
      "contact.hours": "[Agregue sus horas de disponibilidad]",
      "footer.tagline": "Cuidadora · Compañía y apoyo en el hogar",
      "footer.links": "Enlaces rápidos",
      "footer.credits": "Créditos de fotos",
      "footer.creditsText": "Fotos de estados de Wikimedia Commons bajo licencias Creative Commons / dominio público. El fotógrafo y la licencia aparecen en cada foto y en los ",
      "footer.creditsLink": "créditos completos",
      "footer.rights": "Maria Rosales. Todos los derechos reservados.",
      "footer.backTop": "↑ Volver arriba",
      "footer.nav": "Pie de página",
      "cta.aria": "Contacto rápido",
      "cta.call": "📞 Llamar a Maria",
      "cta.email": "✉️ Correo",
      "lightbox.aria": "Visor de fotos",
      "lightbox.close": "Cerrar foto",
      "credits.title": "Créditos de fotos",
      "credits.close": "Cerrar",
      "js.sampleBadge": "Testimonio de muestra — reemplazar con comentarios reales de familias",
      "js.localBadge": "Nuevo · compartido en este dispositivo",
      "js.lovedOne": "Ser querido: ",
      "js.remove": "Eliminar",
      "js.removeAria": "Eliminar esta historia de este dispositivo",
      "js.removeConfirm": "¿Eliminar esta historia de este dispositivo?",
      "js.starsOutOf": " de 5 estrellas",
      "js.photoBy": "Foto compartida por ",
      "js.aFamily": "un familiar",
      "js.viewLarger": "Ver más grande: ",
      "js.photoCredit": "Foto: ",
      "js.errImage": "Por favor elija un archivo de imagen.",
      "js.errPhotoRead": "Lo sentimos, no se pudo leer esa foto. Pruebe con otra.",
      "js.errName": "Por favor escriba su nombre.",
      "js.errRel": "Por favor elija su relación con su ser querido.",
      "js.errMsg": "Por favor escriba un mensaje (al menos 10 caracteres).",
      "js.errConsent": "Por favor marque la casilla para permitir que se muestre su historia.",
      "js.thanks": "¡Gracias! Su historia se ha agregado al muro. 💛",
      "js.thanksOffline": " (No se pudo enviar en línea por ahora, pero está guardada en este dispositivo.)",
      "js.thanksPhotoSkip": " La foto era demasiado grande para guardar en modo demo.",
      "js.thanksNoSave": "¡Gracias! Su historia se muestra abajo, pero este navegador no pudo guardarla.",
      "rel.Son": "Hijo",
      "rel.Daughter": "Hija",
      "rel.Spouse / Partner": "Cónyuge / Pareja",
      "rel.Grandchild": "Nieto / Nieta",
      "rel.Niece / Nephew": "Sobrino / Sobrina",
      "rel.Friend / Neighbor": "Amigo / Vecino",
      "rel.I was the client": "Yo era el cliente",
      "rel.Other family member": "Otro familiar",
      "rel.Family member": "Familiar",
      "rel.Client": "Cliente"
    }
  };

  function t(key) {
    var lang = I18N.current;
    var bag = STRINGS[lang] || STRINGS.en;
    if (bag[key] != null) return bag[key];
    if (STRINGS.en[key] != null) return STRINGS.en[key];
    return key;
  }

  function apply(lang) {
    if (!STRINGS[lang]) lang = "en";
    I18N.current = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(key);
      if (el.tagName === "TITLE") el.textContent = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    // Meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.ogDescription"));

    // Language toggle pressed state
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(on));
      btn.classList.toggle("is-active", on);
    });

    // Notify app to re-render dynamic bits
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: lang } }));
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    var lang = (saved === "es" || saved === "en") ? saved : "en";
    apply(lang);

    var toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-lang]");
        if (!btn) return;
        apply(btn.getAttribute("data-lang"));
      });
    }
  }

  var I18N = {
    current: "en",
    t: t,
    apply: apply,
    init: init,
    LANG_KEY: LANG_KEY
  };
  window.I18N = I18N;
})();
