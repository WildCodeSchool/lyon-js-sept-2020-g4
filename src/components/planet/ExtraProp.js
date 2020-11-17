// Creation d'un tableau en dur car manque d'infos sur l'API.

export const ExtraProps = {
  mars: {
    tempMin: -133,
    tempMax: 27,
    url: './marsTest.png',
    composition: 'Gaz carbonique',
    rotation: 868,
    periodeRotation: 24.6,
    revolutionSolaire: 687,
    fromSun: 220,
    description:
      "Située à environ 228 millions de kilomètres du Soleil, Mars est la quatrième planète du Système solaire. Sa couleur rouge est donnée par l'abondance d'oxyde de fer (rouille) sur sa surface. Il est facile de trouver Mars dans le ciel grâce à sa couleur, même à l'œil nu.",
  },
  neptune: {
    tempMin: -220,
    tempMax: -210,
    url: './neptuneTest.png',
    composition: 'Hydrogène, Hélium et méthane',
    rotation: 9660,
    periodeRotation: 16.6,
    revolutionSolaire: 59860,
    fromSun: 4500,
    description:
      'La plus éloignée depuis le déclassement de Pluton, Neptune est la 8e et dernière planète du système solaire et la plus lointaine des géantes gazeuses. Son nom vient du dieu romain des océans, Neptune (Poséidon dans la mythologie grecque).',
  },
  uranus: {
    tempMin: -224,
    tempMax: -216,
    url: './uranus.png',
    composition: 'Hydrogène, Hélium et méthane',
    rotation: 9320,
    periodeRotation: 17,
    revolutionSolaire: 30660,
    fromSun: 2900,
    description:
      "Uranus est la 7ème planète du système solaire. C'est une géante de glace composée essentiellement d'hydrogène et d'hélium. Elle n'est pas visible à l'oeil nu mais s'observe facilement à la lunette ou au télescope.",
  },
  pluton: {
    tempMin: -184,
    tempMax: -173,
    url: './pluton.png',
    composition: 'Azote, Monoxyde de carbone',
    rotation: 3700,
    periodeRotation: 6.387,
    revolutionSolaire: 90553,
    fromSun: 5800,
    description:
      'Pluton, officiellement désignée par Pluton, est une planète naine, la plus volumineuse connue dans le Système solaire, et la deuxième en ce qui concerne sa masse. Pluton est ainsi le neuvième plus gros objet connu orbitant directement autour du Soleil et le dixième par la masse.',
  },
  jupiter: {
    tempMin: -129,
    tempMax: -118,
    url: './jupiterTest.png',
    composition: 'Hydrogène, Hélium',
    rotation: 47051,
    periodeRotation: 9.55,
    revolutionSolaire: 4335,
    fromSun: 780,
    description:
      "Jupiter est une planète géante gazeuse. Il s'agit de la plus grosse planète du Système solaire, plus volumineuse et massive que toutes les autres planètes réunies, et la cinquième planète par sa distance au Soleil.",
  },
  mercure: {
    tempMin: -183,
    tempMax: 427,
    url: './mercureTest.png',
    composition: 'Hydrogène, Hélium',
    rotation: 1000,
    periodeRotation: 1392,
    revolutionSolaire: 50,
    fromSun: 55,
    description:
      'Planète la plus proche du Soleil et plus petite du Système solaire, Mercure n’a pour l’instant été visitée que par deux sondes. Mais BepiColombo, la mission la plus risquée jamais entreprise par l’Esa, est en chemin…',
  },
  saturne: {
    tempMin: -184,
    tempMax: -173,
    url: './satur.png',
    composition: 'Hydrogène, Hélium, eau, méthane, ammoniac',
    rotation: 34000,
    periodeRotation: 10.33,
    revolutionSolaire: 10774,
    fromSun: 1430,
    description:
      'Saturne est la sixième planète du Système solaire par éloignement au Soleil et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse.',
  },
  terre: {
    tempMin: -98,
    tempMax: 56.7,
    url: './terreTest.png',
    composition: 'Azote, Oxygène, gaz carbonique',
    rotation: 1700,
    periodeRotation: 24,
    revolutionSolaire: 365,
    fromSun: 150,
    description:
      "La Terre est la troisième planète du système solaire. Il s'agit d'une planète tellurique. Elle tourne autour du Soleil en 365.25 jours et sur elle-même en 1 jour. La Terre n'est pas ronde, il s'agit d'un ellipsoïde aplati.",
  },
  venus: {
    tempMin: -482,
    tempMax: -446,
    url: './venus.png',
    composition: 'Dioxyde de carbone, diazote',
    rotation: 6.52,
    periodeRotation: -5832,
    revolutionSolaire: 243,
    fromSun: 104,
    description:
      "Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour. Vénus orbite autour du Soleil tous les 224,7 jours terrestres. ",
  },
  soleil: {
    tempMin: 4200,
    tempMax: 8500,
    url: './sun.png',
    composition: 'Hydrogene, Hélium',
    rotation: 7200,
    periodeRotation: 648,
    revolutionSolaire: 'N/A',
    fromSun: 0,
    description:
      "Le soleil est une étoile de type naine jaune. C'est donc une énorme boule de gaz dans laquelle se produit une fusion nucléaire. Le soleil possède un diamètre d'environ 1 400 000 km. Il est 110 fois plus gros que la Terre. Il représente 99,86% du système solaire, soit 330 000 fois celle de la Terre.",
  },
  lune: {
    tempMin: -223,
    tempMax: 123,
    url: './moon.png',
    composition: 'Hélium, Néon',
    rotation: 3683,
    periodeRotation: 168,
    revolution: 'N/A',
    fromSun: 150,
    description:
      "La Lune, ou Terre I, est un objet céleste qui orbite autour de la planète Terre et le seul satellite naturel permanent de la Terre. C'est le cinquième plus grand satellite naturel du Système solaire et le plus grand des satellites planétaires par rapport à la taille de la planète autour de laquelle elle orbite. ",
  },
};

export { ExtraProps as default };
