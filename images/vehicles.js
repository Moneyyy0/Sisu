/*
  ==========================================================
  CATALOGUE SISU — c'est ICI que tu modifies tes véhicules
  ==========================================================

  Pour ajouter une photo : mets ton screenshot dans le dossier "images"
  avec EXACTEMENT le nom indiqué dans "images" ci-dessous
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
    // La 1re image est l'image principale, les suivantes forment la galerie
    images: [
      "images/globetrotter-1.jpg",
      "images/globetrotter-2.jpg",
      "images/globetrotter-3.jpg"
    ],
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
    badge: "Mitrailleuse amovible",
    images: [
      "images/defender-1.jpg",
      "images/defender-2.jpg",
      "images/defender-3.jpg"
    ],
    highlights: [
      { value: "24 576", unit: "SU", label: "Puissance moteur" },
      { value: "82,8", unit: "km/h", label: "Vitesse maximale (23 m/s)" },
      { value: "4", unit: "×4", label: "Roues motrices" }
    ],
    specs: [
      ["Puissance du moteur", "24 576 SU"],
      ["Vitesse maximale", "82,8 km/h (23 m/s)"],
      ["Masse du véhicule", "93 kpg"],
      ["Nombre de roues", "4"],
      ["Roues motrices", "4"],
      ["Consommation maximale", "1 mb/s"],
      ["Taille du réservoir", "160 000 mb"],
      ["Carburants compatibles", "Essence, biodiesel, diesel"]
    ]
  }
];
