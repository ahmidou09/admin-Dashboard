const generateFakeDataProduct = () => {
  const data = [];

  // Sample product titles
  const productTitles = [
    "Smartphone",
    "Laptop",
    "Smartwatch",
    "Tablet",
    "Desktop PC",
    "E-reader",
    "Gaming Console",
    "Portable Speaker",
    "Camera",
    "Headphones",
    "Wireless Charger",
    "Bluetooth Earbuds",
    "VR Headset",
    "Fitness Tracker",
    "Projector",
    "Drone",
  ];

  // Sample colors
  const colors = [
    "Black",
    "White",
    "Gray",
    "Silver",
    "Gold",
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Pink",
    "Purple",
    "Cyan",
    "Magenta",
  ];

  // Sample producers
  const producers = [
    "Electronix",
    "TechGear",
    "SmartTech",
    "Innovatech",
    "GizmoWorks",
    "NextGen Tech",
    "PioneerTech",
    "Quantum Devices",
    "GearBest",
    "EcoTech",
  ];

  // Function to generate a random product title
  const randomProductTitle = () => {
    return productTitles[Math.floor(Math.random() * productTitles.length)];
  };

  // Function to generate a random color
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to generate a random producer
  const randomProducer = () => {
    return producers[Math.floor(Math.random() * producers.length)];
  };

  // Function to generate a random image URL
  const randomImageUrl = (id) => {
    return `https://source.unsplash.com/random/200x200?sig=${id}`;
  };

  for (let i = 0; i < 18; i++) {
    const title = randomProductTitle();
    const color = randomColor();
    const producer = randomProducer();
    const inStock = i % 3 === 0 ? true : false;
    data.push({
      id: i + 1,
      title: title,
      color: color,
      producer: producer,
      inStock: inStock,
      price: `$${(Math.random() * 1000).toFixed(2)}`,
      createdAt: new Date().toDateString(),
      imageUrl: randomImageUrl(i + 1),
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      ],
    });
  }

  return data;
};

export const electronicData = generateFakeDataProduct();
