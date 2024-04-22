const generateFakeData = () => {
  const data = [];

  for (let i = 0; i < 33; i++) {
    data.push({
      id: i + 1,
      image: `https://avatar.iran.liara.run/public/${i + 1}.png`,
      fullName: `Full Name ${i + 1}`,
      username: `user${i + 1}`,
      phone: `123456789${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: i % 2 === 0 ? "verified" : "unverified",
      price: `$${(Math.random() * 100).toFixed(2)}`,
      activities: [
        {
          activitie: "purchased Playstation 5 Digital Edition",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} minutes ago`
          }`,
        },
        {
          activitie: "purchased Xbox Series X",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} hours ago`
          }`,
        },
        {
          activitie: "purchased Google Stadia",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} days ago`
          }`,
        },
        {
          activitie: "purchased Nintendo Switch",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} weeks ago`
          }`,
        },
        {
          activitie: "purchased Phone X",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} months ago`
          }`,
        },
        {
          activitie: "purchased Chromebook X",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} years ago`
          }`,
        },
        {
          activitie: "purchased HomePod",
          time: ` ${
            +(Math.random() * 10).toFixed(0) === 0
              ? "just now"
              : `${(Math.random() * 10).toFixed(0)} years ago`
          }`,
        },
      ],
    });
  }

  return data;
};

export const userData = generateFakeData();
