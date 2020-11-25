// Random target/planet generation containing picture & description

const planets = [
  [
    {
      planet: 'Terre',
      url: './terreTest.png',
      distance: 150,
      composition: 'funFact',
    },
    {
      planet: 'Mars',
      url: './marsTest.png',
      distance: 220,
      composition: 'CO2',
    },
    {
      planet: 'Jupiter',
      url: './jupiterTest.png',
      distance: 780,
      composition: 'hydrogene',
    },
    {
      planet: 'Saturne',
      url: './saturneTest.png',
      distance: 1430,
      composition: 'hydrogene',
    },
    {
      planet: 'Uranus',
      url: './uranusTest.png',
      distance: 2900,
      composition: 'glace',
    },
    {
      planet: 'Mercure',
      url: './mercureTest.png',
      distance: 55,
      composition: 'hydrogene',
    },
    {
      planet: 'Venus',
      url: './venus.png',
      distance: 104,
      composition: 'CO2',
    },
    {
      planet: 'Pluton',
      url: './pluton.png',
      distance: 5800,
      composition: 'glace',
    },
    {
      planet: 'Neptune',
      url: './neptuneTest.png',
      distance: 4500,
      composition: 'glace',
    },
  ],
  [
    {
      munition: 'Napalm',
      url: './redRocket.png',
      description:
        "L'arme de Type <FEU> est efficasse contre les planètes qui ont une atmosphère chargée en méthane ou autre gaz inflamable",
    },
    {
      munition: 'Algues',
      url: './greenRocket.png',
      description:
        "L'arme de Type <Plante> est efficasse contre les planètes qui ont une atmosphère chargée en CO2",
    },
    {
      munition: 'Foreuse',
      url: './brownRocket.png',
      description:
        "L'arme de Type <Foreuse> est efficasse contre les planètes qui ont une composition chargée en glaces et roches",
    },
  ],
  [
    {
      canon: 'Longue portée',
      url: './longRange.png',
      range: 1430,
      description:
        'La longue portée est efficace contre les planètes distantes',
    },
    {
      canon: 'Courte portée',
      url: './shortRange.png',
      range: 0,
      description:
        'La courte portée est plus précise pour les planètes proches',
    },
  ],
];

export default planets;
