// Creating an array and passing the number, questions, options, and answers
var questions = [
    {
      number: 1,
      question: "What is a black hole?",
      answer: "A region with gravity so strong that even light can’t escape",
      options: shuffle([
        "A shining star",
        "An empty void in space",
        "A region with gravity so strong that even light can’t escape",
        "A hole drilled in space",
      ]),
    },
    {
      number: 2,
      question: "How does a black hole form?",
      answer: "By the collapse of a massive star",
      options: shuffle([
        "By two planets colliding",
        "By the collapse of a massive star",
        "By a star disappearing",
        "By space folding on itself",
      ]),
    },
    {
      number: 3,
      question: "What is the point of no return called?",
      answer: "The event horizon",
      options: shuffle([
        "The dark point",
        "The event horizon",
        "The gravity barrier",
        "The last boundary",
      ]),
    },
    {
      number: 4,
      question: "What is the name of the black hole at the center of our galaxy?",
      answer: "Sagittarius A*",
      options: shuffle([
        "Cygnus X-1",
        "Andromeda Hole",
        "Sagittarius A*",
        "Vortex Alpha",
      ]),
    },
    {
      number: 5,
      question: "Who proposed the theory of general relativity?",
      answer: "Albert Einstein",
      options: shuffle([
        "Albert Einstein",
        "Stephen Hawking",
        "Isaac Newton",
        "Galileo Galilei",
      ]),
    },
    {
      number: 6,
      question: "According to general relativity, gravity is...",
      answer: "A curvature in spacetime",
      options: shuffle([
        "A force between objects",
        "A magnetic pull",
        "A curvature in spacetime",
        "A wave through space",
      ]),
    },
    {
      number: 7,
      question: "What happens to time near a black hole?",
      answer: "It slows down",
      options: shuffle([
        "It slows down",
        "It passes faster",
        "It stops completely",
        "It reverses",
      ]),
    },
    {
      number: 8,
      question: "Can we see a black hole directly?",
      answer: "No",
      options: shuffle([
        "Yes",
        "No",
        "Only from satellites",
        "Only by X-rays",
      ]),
    },
    {
      number: 9,
      question: "What is the radiation that black holes may emit called?",
      answer: "Hawking Radiation",
      options: shuffle([
        "Newton Radiation",
        "Hawking Radiation",
        "Sagan Radiation",
        "Einstein Light",
      ]),
    },
    {
      number: 10,
      question: "In what year was the first image of a black hole taken?",
      answer: "2019",
      options: shuffle([
        "2019",
        "2009",
        "2022",
        "2015",
      ]),
    },
    {
      number: 11,
      question: "What is the accretion disk?",
      answer: "A disk of matter and light spinning around a black hole",
      options: shuffle([
        "A disk of matter and light spinning around a black hole",
        "A magnetic field",
        "A time zone",
        "A ring of stars",
      ]),
    },
    {
      number: 12,
      question: "What happens if something falls into a black hole?",
      answer: "It is pulled in and never comes back",
      options: shuffle([
        "It exits from another side",
        "It turns into light",
        "It is pulled in and never comes back",
        "It bounces back",
      ]),
    },
    {
      number: 13,
      question: "What is the smallest type of black hole?",
      answer: "Stellar black hole",
      options: shuffle([
        "Supermassive black hole",
        "Stellar black hole",
        "Gas black hole",
        "Miniature black hole",
      ]),
    },
    {
      number: 14,
      question: "What is spacetime?",
      answer: "A mix of space and time as one fabric",
      options: shuffle([
        "A mix of space and time as one fabric",
        "Space for time",
        "Light’s motion path",
        "A dimensionless void",
      ]),
    },
    {
      number: 15,
      question: "Who is Stephen Hawking?",
      answer: "A physicist who studied black holes",
      options: shuffle([
        "An astronaut",
        "A physicist who studied black holes",
        "A planet discoverer",
        "A mathematician from NASA",
      ]),
    },
    {
      number: 16,
      question: "Which theory explains black hole evaporation?",
      answer: "Hawking Radiation",
      options: shuffle([
        "Hawking Radiation",
        "Quantum mechanics",
        "Special relativity",
        "Entropy theory",
      ]),
    },
    {
      number: 17,
      question: "Are black holes stationary?",
      answer: "No, they move through space",
      options: shuffle([
        "Yes, they stay fixed",
        "No, they move through space",
        "They orbit the Sun",
        "They rotate but don’t move",
      ]),
    },
    {
      number: 18,
      question: "Can black holes be made by humans?",
      answer: "No",
      options: shuffle([
        "Yes",
        "No",
        "Only in labs",
        "Only in theory",
      ]),
    },
    {
      number: 19,
      question: "What happens to light near a black hole?",
      answer: "It bends and loses energy",
      options: shuffle([
        "It speeds up",
        "It stops",
        "It bends and loses energy",
        "It gets brighter",
      ]),
    },
    {
      number: 20,
      question: "What unit is commonly used to describe black hole mass?",
      answer: "Solar mass",
      options: shuffle([
        "Kilogram",
        "Solar mass",
        "Stellar unit",
        "Light year",
      ]),
    },
  ];
  
  // Shuffle function
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  