const generateFakeData = () => {
  const data = [];

  for (let i = 0; i < 15; i++) {
    data.push({
      id: i + 1,
      image: `https://fakeimg.pl/250x100/?text=Image${i + 1}`,
      fullName: `Full Name ${i + 1}`,
      email: `user${i + 1}@example.com`,
      price: `$${(Math.random() * 100).toFixed(2)}`,
    });
  }

  return data;
};

export const dataArray = generateFakeData();
