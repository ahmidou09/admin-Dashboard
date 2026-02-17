const generateFakeData = () => {
  const data = [];

  // Sample first and last names
  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
  ];

  // Sample email domains
  const emailDomains = [
    "yahoo.com",
    "gmail.com",
    "oracle.net",
    "outlook.org",
    "wikipedia.edu",
  ];

  // Function to generate a random date within the last 10 years
  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  // Function to generate a random full name
  const randomFullName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  // Function to generate a random email
  const randomEmail = (firstName, lastName) => {
    const domain =
      emailDomains[Math.floor(Math.random() * emailDomains.length)];
    const emailLocalPart = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    return `${emailLocalPart}@${domain}`;
  };

  for (let i = 0; i < 52; i++) {
    const fullName = randomFullName();
    const [firstName, lastName] = fullName.split(" ");

    data.push({
      id: i + 1,
      image: `https://avatar.iran.liara.run/public/1.png`,
      fullName: fullName,
      username: `user${i + 1}`,
      phone: `+${Math.floor(Math.random() * 10000)}3456789${i + 1}`,
      email: randomEmail(firstName, lastName),
      status: i % 3 === 0 ? true : false,
      price: `$${(Math.random() * 100).toFixed(2)}`,
      createdAt: randomDate(new Date(2013, 0, 1), new Date()).toDateString(),
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
