const sampleListings = [
  {
      title: "Luxury Beach House",
      description: "A stunning beachfront house with panoramic ocean views.",
      price: 500,
      location: "Malibu, California",
      country: "USA",
      geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578916171728-d6d4e0c0985a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNoJTIwaG91c2V8ZW58MHx8fHwxNjcyNjUyOTU0&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Cozy Mountain Cabin",
      description: "A wooden cabin in the heart of the Rocky Mountains.",
      price: 200,
      location: "Aspen, Colorado",
      country: "USA",
      geometry: { type: "Point", coordinates: [-106.837, 39.1911] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1507475608809-9b35f3c24bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhYmluJTIwbW91bnRhaW58ZW58MHx8fHwxNjcyNjUyOTU0&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Seaside Villa",
      description: "A beautiful villa by the sea with private beach access.",
      price: 350,
      location: "Santorini, Greece",
      country: "Greece",
      geometry: { type: "Point", coordinates: [25.4858, 36.3932] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGJlYWNoJTIwdmlsbGF8ZW58MHx8fHwxNjcyNjUyOTU0&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Desert Retreat",
      description: "A luxurious tented camp in the heart of the desert.",
      price: 180,
      location: "Jaisalmer, India",
      country: "India",
      geometry: { type: "Point", coordinates: [70.9167, 26.9157] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGRlc2VydCUyMGNhbXB8ZW58MHx8fHwxNjcyNjUyOTU0&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Floating House",
      description: "A unique floating house experience on a tranquil lake.",
      price: 250,
      location: "Lake Bled, Slovenia",
      country: "Slovenia",
      geometry: { type: "Point", coordinates: [14.0833, 46.3667] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1519832976840-74dfcb9c39a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsb2F0aW5nJTIwaG91c2V8ZW58MHx8fHwxNjcyNjUyOTU0&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Luxury Treehouse",
      description: "Stay in a high-end treehouse surrounded by nature.",
      price: 275,
      location: "Amazon Rainforest, Brazil",
      country: "Brazil",
      geometry: { type: "Point", coordinates: [-63.5822, -3.4653] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1562176555-8fd69f1e5002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHRyZWVob3VzZXxlbnwwfHx8fDE2NzI2NTI5NTQ&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Snowy Igloo",
      description: "An igloo stay in the Arctic Circle for an unforgettable experience.",
      price: 300,
      location: "Lapland, Finland",
      country: "Finland",
      geometry: { type: "Point", coordinates: [25.8485, 67.8558] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1576437151127-eb1a0ea3aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGlnbG9vfGVufDB8fHx8MTY3MjY1Mjk1NA&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    },
    {
      title: "Historic Castle Stay",
      description: "Stay in a medieval castle with modern luxury.",
      price: 400,
      location: "Edinburgh, Scotland",
      country: "United Kingdom",
      geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1555231954-4414c325b5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGNhc3RsZXxlbnwwfHx8fDE2NzI2NTI5NTQ&ixlib=rb-1.2.1&q=80&w=800",
      },
      owner: "67c87ea7ae670a82d9ee0594",
    }
];

module.exports = { data: sampleListings };