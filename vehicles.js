/*
  ==========================================================
  CATALOGUE SISU — c'est ICI que tu modifies tes véhicules
  ==========================================================

  Pour ajouter une photo : mets ton screenshot dans le dossier "images"
  avec EXACTEMENT le nom indiqué dans "images" ci-dessous (1 photo par véhicule ;
  tu peux en ajouter d'autres dans la liste, une galerie apparaîtra alors)
  (ou change le nom ici pour qu'il corresponde à ton fichier).
  Tant que le fichier n'existe pas, une image de test s'affiche à la place.

  Pour ajouter un modèle : copie un bloc { ... } ci-dessous, colle-le
  à la suite (sans oublier la virgule) et change les infos.
*/

const VEHICLES = [
  {
    id: "globetrotter",
    name: "Sisu Globetrotter",
    tagline: "L'aventurier polyvalent",
    description:
      "Le Sisu Globetrotter est un véhicule performant ultra polyvalent ayant remporté la première édition de la course de rallye Monte Carbloc. Son design surélevé ainsi que ses 6 roues motrices lui permettent de rouler sur tout type de terrain. De plus, son moteur surperformant et son grand espace à l'arrière vous laissent de la place pour y installer ce que vous voulez, comme des machines ou une remorque.",
    badge: "Vainqueur Monte Carbloc",
    // Une seule image suffit. Si tu en mets plusieurs, des miniatures apparaissent
    images: ["images/globetrotter.jpg"],
    // Les 3 chiffres mis en avant
    highlights: [
      { value: "24 576", unit: "SU", label: "Puissance moteur" },
      { value: "86,4", unit: "km/h", label: "Vitesse maximale (24 m/s)" },
      { value: "6", unit: "×6", label: "Roues motrices" }
    ],
    specs: [
      ["Puissance du moteur", "24 576 SU"],
      ["Vitesse maximale", "86,4 km/h (24 m/s)"],
      ["Masse du véhicule", "95 kpg"],
      ["Nombre de roues", "6"],
      ["Roues motrices", "6"],
      ["Consommation maximale", "1 mb/s"],
      ["Taille du réservoir", "160 000 mb"],
      ["Carburants compatibles", "Essence, biodiesel, diesel"]
    ]
  },
  {
    id: "defender",
    name: "Sisu Defender",
    tagline: "Tire-vous de toutes les situations",
    description:
      "Ce 4x4 équipé d'un moteur de camion saura vous sortir de n'importe quelle situation grâce à ses 4 roues motrices, mais aussi grâce à sa mitrailleuse installée à l'arrière ! Et si cette mitrailleuse ne vous plaît pas, vous pouvez la retirer afin de gagner du poids ou de faire quelque chose de plus productif de cet espace.",
    badge: "Mitrailleuse montée",
    images: ["images/defender.jpg"],
    highlights: [
      { value: "24 576", unit: "SU", label: "Puissance moteur" },
      { value: "85", unit: "km/h", label: "Vitesse maximale (23,6 m/s)" },
      { value: "4", unit: "×4", label: "Roues motrices" }
    ],
    specs: [
      ["Puissance du moteur", "24 576 SU"],
      ["Vitesse maximale", "85 km/h (23,6 m/s)"],
      ["Masse du véhicule", "70 kpg"],
      ["Nombre de roues", "4"],
      ["Roues motrices", "4"],
      ["Consommation maximale", "1 mb/s"],
      ["Taille du réservoir", "160 000 mb"],
      ["Carburants compatibles", "Essence, biodiesel, diesel"]
    ]
  },
  {
    id: "assault",
    name: "Sisu Assault",
    tagline: "Le blindage avant tout",
    description:
      "On a installé une boîte de conserve en métal sur des chenilles de 13 blocs de long, puis on a posé un gros canon dessus, et on a osé appeler ça un char d'assaut. La maniabilité est sacrifiée au profit du blindage.",
    badge: "Char d'assaut",
    images: ["images/assault.jpg"],
    highlights: [
      { value: "24 576", unit: "SU", label: "Puissance moteur" },
      { value: "52", unit: "km/h", label: "Vitesse maximale (14,5 m/s)" },
      { value: "194", unit: "kpg", label: "Masse du véhicule" }
    ],
    specs: [
      ["Puissance du moteur", "24 576 SU"],
      ["Vitesse maximale", "52 km/h (14,5 m/s)"],
      ["Masse du véhicule", "194 kpg"],
      ["Nombre de roues", "26 (chenilles)"],
      ["Roues motrices", "26"],
      ["Consommation maximale", "1 mb/s"],
      ["Taille du réservoir", "160 000 mb"],
      ["Carburants compatibles", "Essence, biodiesel, diesel"]
    ]
  },
  {
    id: "artillery",
    name: "Sisu Artillery",
    tagline: "La puissance de feu à distance",
    description:
      "Ce véhicule vous offre la puissance de feu d'un blindé avec la mobilité d'un petit camion. Son canon en acier est capable de toucher une cible à 500 blocs avec une grande précision, et jusqu'à 800 blocs avec une précision plus faible.",
    badge: "Artillerie mobile",
    images: ["images/artillery.jpg"],
    highlights: [
      { value: "500", unit: "blocs", label: "Portée à grande précision" },
      { value: "800", unit: "blocs", label: "Portée à faible précision" },
      { value: "86", unit: "km/h", label: "Vitesse maximale (23,9 m/s)" }
    ],
    specs: [
      ["Puissance du moteur", "24 576 SU"],
      ["Vitesse maximale", "86 km/h (23,9 m/s)"],
      ["Masse du véhicule", "100 kpg"],
      ["Nombre de roues", "6"],
      ["Roues motrices", "6"],
      ["Consommation maximale", "1 mb/s"],
      ["Taille du réservoir", "160 000 mb"],
      ["Carburants compatibles", "Essence, biodiesel, diesel"]
    ]
  }
];
