import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    kiubix, 
    agilezip, 
    maquipa, 
    towerhousestudio, 
    etchasketch, 
    rock, 
    burgi,
    nuxtjs,
    python,
    flutter
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      url: "#about" 
    },
    {
      id: "work",
      title: "Work",
      url: "#work" 
    },
    {
      id: "contact",
      title: "Contact",
      url: "#contact" 
    },
    {
      id: "sketch", 
      title: "Have fun",
      url: "#games" 
    },
    {
      id: "blog",
      title: "Blog",
      url: "https://lomlomdevblog.netlify.app/"
      
    }
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Researcher | ML dev",
      icon: mobile,
    },
    {
      title: "Creative",
      icon: backend,
    },
    {
      title: "Critical thinker",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NuxtJS",
      icon: nuxtjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "TowerHouse Studio",
      icon: towerhousestudio,
      iconBg: "#FFFFFF",
      date: "Dec 2023 - June 2024",
      points: [
        "Developed frontend of mobile app following Figma designs.",
        "Demonstrated adaptability and strong teamwork skills by successfully collaborating with two different teams to achieve project goals and enhance overall performance.",
        "Developed fullstack solutions with Laravel along with Vue.js.",
        "Helped to create a Docker environment for the project to ensure consistency across the development team.",
        "Created a C4 diagram to represent the software architecture",
        "Technologies: Laravel, MySQL, Docker, Flutter, Vue.js, CSS.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Agilezip",
      icon: agilezip,
      iconBg: "#E6DEDD",
      date: "April 2023 - August 2023",
      points: [
        "Developing web applications using Python, javascript, xml and other related technologies.",
        "Supervising the development of functional and quality products",
        "Applying great communication skills to attend requirements directly from the client",
        "Collaborating with cross-functional teams including administrators and other developers to create high-quality products.",
        "Developing web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Technologies: PostgreSQL, Ionic, XML, Python, Git, Docker.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Kiubix",
      icon: kiubix,
      iconBg: "#FFFFFF",
      date: "June 2021 - September 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Technologies: GraphQL, Spark, Flask, MySQL, Git."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Maquipa",
      icon: maquipa,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - June 2021",
      points: [
        "Responsible for the organization and coordination of the project.",
        "Collaborating with the frontend team to develop user friendly and beautiful apps.",
        "Creation,maintaining, test and debug of the core desk application logic, data integration and management.",
        "Created system for a constructor industry to manage its storage, auditories and construction project materials.",
        "Technologies: C#, MySQL, Git"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Her academic background clearly reflects her analytical and methodical approach to work, which was a great asset to our team. In addition, her willingness to learn and adapt to new technologies and work methods was evident from day one. I emphasize that she is a highly skilled and adaptable professional, with a technical profile, problem-solving skills and a personality to be valued. Vanessa demonstrated her ability to adapt quickly to a completely new project, with remarkable efficiency and effectiveness.",
      name: "Bruno Villero",
      designation: "Team Leader",
      company: "TowerHouse Studio",
      image: "https://media.licdn.com/dms/image/C4E03AQGcCqN39b1Gcg/profile-displayphoto-shrink_200_200/0/1544295612914?e=1726704000&v=beta&t=_-1A1Htc4QzwSir4hwn17h-qG3Xrq0ocbmoUZXVkXCw",
    },
    {
      testimonial:
        "",
      name: "Nicolás Curbelo",
      designation: "Teammate",
      company: "TowerHouse Studio",
      image: "https://media.licdn.com/dms/image/C4D03AQH4kbC1aDys_g/profile-displayphoto-shrink_200_200/0/1624573797682?e=1726704000&v=beta&t=196w-IcU5KMAZmiR-0Nwjoyg20xa0Hje1dgOOEt24aA",
    },
    {
      testimonial:
        "",
      name: "Diego Manchado",
      designation: "CTO",
      company: "TowerHouse Studio",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "",
      name: "Jessica Sierra",
      designation: "CTO",
      company: "TowerHouse Studio",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const games = [
    {
      name: "Etch-A-Sketch",
      description:
        "Draw whats on your mind",
      image: etchasketch,
      source_code_link: "https://lomlomm.github.io/Etch-A-Sketch/",
    }, 
    {
      name: "Rock-Paper-Scissors",
      description:
        "It's time to beat the machines",
      image: rock,
      source_code_link: "https://lomlomm.github.io/RockPaperScissors/",
    }, 
    {
      name: "Burgi the dev", 
      description: "This is burgi the dev. She adopted a dog and struggles to not be eaten. She likes to paint and spend time if her confy room.",
      image: burgi, 
      source_code_link: "https://my.spline.design/miniroomcopy-19f8d0c7b5f8cd41c755b41cb9860a6f/"
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, games };