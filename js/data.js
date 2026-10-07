/*
 * SAMPLE testimonials — these are NOT real. They are placeholders that show
 * how the wall looks. Replace them with real family comments (with
 * permission), or set SHOW_SAMPLE_TESTIMONIALS to false in js/config.js.
 * message_es is used when the UI language is Spanish.
 */
window.SAMPLE_TESTIMONIALS = [
  {
    id: "sample-1",
    sample: true,
    name: "Family member",
    relationship: "Daughter",
    city: "[City]",
    lovedOne: "Mom",
    rating: 5,
    message: "Maria treated my mother with so much patience and respect. She looked forward to her visits, and for the first time in a long while our family could truly relax.",
    message_es: "Maria trató a mi madre con tanta paciencia y respeto. Ella esperaba con ilusión sus visitas, y por primera vez en mucho tiempo nuestra familia pudo realmente relajarse.",
    photo: "",
    date: ""
  },
  {
    id: "sample-2",
    sample: true,
    name: "Family member",
    relationship: "Son",
    city: "[City]",
    lovedOne: "Dad",
    rating: 5,
    message: "Dependable, kind and always on time. Maria kept us updated after every visit, and my father felt safe moving around the house again.",
    message_es: "Confiable, amable y siempre puntual. Maria nos mantenía al tanto después de cada visita, y mi padre se sintió seguro moviéndose por la casa otra vez.",
    photo: "",
    date: ""
  },
  {
    id: "sample-3",
    sample: true,
    name: "Family member",
    relationship: "Spouse / Partner",
    city: "[City]",
    lovedOne: "Husband",
    rating: 5,
    message: "Having Maria help a few days a week gave me time to rest and take care of myself. She is gentle, thoughtful and genuinely cares.",
    message_es: "Tener a Maria unos días a la semana me dio tiempo para descansar y cuidarme. Es gentil, considerada y realmente se preocupa.",
    photo: "",
    date: ""
  },
  {
    id: "sample-4",
    sample: true,
    name: "Family member",
    relationship: "Grandchild",
    city: "[City]",
    lovedOne: "Grandma",
    rating: 5,
    message: "Grandma lights up when Maria arrives. They cook together, take short walks and talk for hours. She made her days brighter.",
    message_es: "La abuela se ilumina cuando llega Maria. Cocinan juntas, dan paseos cortos y hablan durante horas. Hizo más brillantes sus días.",
    photo: "",
    date: ""
  },
  {
    id: "sample-5",
    sample: true,
    name: "Client",
    relationship: "I was the client",
    city: "[City]",
    lovedOne: "",
    rating: 5,
    message: "Maria helped me stay independent in my own home. She never rushes me and always makes me feel respected.",
    message_es: "Maria me ayudó a mantenerme independiente en mi propia casa. Nunca me apresura y siempre me hace sentir respetado.",
    photo: "",
    date: ""
  },
  {
    id: "sample-6",
    sample: true,
    name: "Family member",
    relationship: "Niece / Nephew",
    city: "[City]",
    lovedOne: "Uncle",
    rating: 5,
    message: "Our family lives far away, so knowing Maria was there with my uncle meant everything. Honest, caring and easy to talk to.",
    message_es: "Nuestra familia vive lejos, así que saber que Maria estaba con mi tío lo significó todo. Honesta, cariñosa y fácil de hablar.",
    photo: "",
    date: ""
  }
];

/* State gallery photos (downloaded into assets/states). Sources and licenses
   are also listed in README.md. */
window.STATE_PHOTOS = [
  { group: "ca", src: "assets/states/california-poppies.jpg", place: "Antelope Valley Poppy Reserve", state: "California", alt: "Hillsides covered in orange California poppies", credit: "Thomas", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Antelope_Valley_Poppy_Preserve.jpg" },
  { group: "ca", src: "assets/states/california-yosemite.jpg", place: "Tunnel View, Yosemite", state: "California", alt: "Yosemite Valley with El Capitan, Bridalveil Fall and Half Dome", credit: "Diliff", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Tunnel_View,_Yosemite_Valley,_Yosemite_NP_-_Diliff.jpg" },
  { group: "ca", src: "assets/states/california-bigsur.jpg", place: "Bixby Creek Bridge, Big Sur", state: "California", alt: "Bixby Creek Bridge arching over a canyon on the Big Sur coast", credit: "King of Hearts", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Bixby_Creek_Bridge_May_2011_panorama.jpg" },
  { group: "ca", src: "assets/states/california-goldengate.jpg", place: "Golden Gate Bridge, San Francisco", state: "California", alt: "Golden Gate Bridge rising above the fog at sunset", credit: "Brocken Inaglory", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge_at_sunset_1.jpg" },
  { group: "ca", src: "assets/states/california-joshuatree.jpg", place: "Joshua Tree National Park", state: "California", alt: "Joshua tree and boulders under a blue desert sky", credit: "Tuxyso", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Joshua_Tree_National_Park_2013.jpg" },
  { group: "ca", src: "assets/states/nevada-laketahoe.jpg", place: "Emerald Bay, Lake Tahoe", state: "California", alt: "Emerald Bay on Lake Tahoe surrounded by pine trees at golden hour", credit: "Frank Schulenburg", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Golden_Hour_at_Emerald_Bay.jpg" },
  { group: "us", src: "assets/states/arizona-grandcanyon.jpg", place: "Grand Canyon, South Rim", state: "Arizona", alt: "Grand Canyon glowing red and orange at sunset", credit: "Mgimelfarb", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:Grand_Canyon_South_Rim_at_Sunset.jpg" },
  { group: "us", src: "assets/states/utah-arches.jpg", place: "Delicate Arch, Arches National Park", state: "Utah", alt: "Red rock landscape with Delicate Arch in the distance", credit: "Tadam", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Delicate_arch_viewpoint.jpg" },
  { group: "us", src: "assets/states/oregon-craterlake.jpg", place: "Crater Lake National Park", state: "Oregon", alt: "Deep blue Crater Lake surrounded by snowy trees", credit: "WolfmanSF", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Crater_Lake_winter_pano2.jpg" },
  { group: "us", src: "assets/states/hawaii-napali.jpg", place: "Nā Pali Coast, Kauaʻi", state: "Hawaii", alt: "Green fluted cliffs of the Na Pali Coast above the blue Pacific", credit: "Jeff Kubina", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Na_Pali_Coast,_Kauai,_Hawaii.jpg" }
];
