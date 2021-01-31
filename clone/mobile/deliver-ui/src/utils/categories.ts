const categories = [
  {
    id: 0,
    title: 'Vegetables',
    photo_url: require('../../assets/images/vegetables.png'),
    amount: 43,
    cover: require('../../assets/images/broccoli.png'),
    chips: [
    {
      name: "Сabbage and lettuce",
      amount: 14,
    },
    {
      name: "Сucumbers and tomatoes",
      amount: 10,
    },
    {
      name: "Beet Greens and Collard Greens",
      amount: 5,
    },
    {
      name: "Oinons and garlic",
      amount: 8,
    },
    {
      name: "Peppers",
      amount: 7,
    },
    {
      name: "Potatoes and carrots",
      amount: 4,
    },
    ],
    data: [
    {
      id: 0,
      name: "Boston Lettuce",
      price: 1.10,
      measure: "€ / piece",
      approximation: "~ 150 gr / piece",
      picture: require('../../assets/images/boston-lettuce.png'),
      title: "Spain", 
      description: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
    },
    {
      id: 1,
      name: "Purple Cauliflower",
      price: 1.85,
      measure: "€ / kg",
      picture: require('../../assets/images/purple-cauliflower.png'),
    },
    {
      id: 2,
      name: "Savoy Cabbage",
      price: 1.45,
      measure: "€ / kg",
      picture: require('../../assets/images/savoy-cabbage.png'),
    },
    ],
  },

  {
    id: 1,
    title: 'Fruits',
    photo_url: require('../../assets/images/fruits.png'),
    amount: 32,
  },

  {
    id: 2,
    title: 'Bread',
    photo_url: require('../../assets/images/bread.png'),
    amount: 22,
  },

  {
    id: 3,
    title: 'Sweets',
    photo_url: require('../../assets/images/sweets.png'),
    amount: 56,
  },

  {
    id: 4,
    title: 'Pasta',
    photo_url: require('../../assets/images/pasta.png'),
    amount: 20,
  },

  {
    id: 5,
    title: 'Drinks',
    photo_url: require('../../assets/images/drinks.png'),
    amount: 30,
  },
];

export default categories;
