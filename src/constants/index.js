import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    next,
    firebase,
    postgress,
    blogger,
    bigbag,
    matrify,
    creator,
    sugith,
    adwaith,
    soji,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full stack Developer",
      icon: web,
    },
    {
      title: "NextJs",
      icon: creator,
    },
    {
      title: "Microservices",
      icon: mobile,
    },
    {
      title: "NodeJs",
      icon: backend,
    }
  ];
  
  const technologies = [
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Next JS",
      icon: next,
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
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "postgress",
      icon: postgress,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "I was able to work with Sayand on a project, and with his backend expertise, we completed the project in less time than given.",
      name: "Sugith K",
      designation: "Flutter Developer",
      image: sugith,
      portfolio_link:"sugith.in"
    },
    {
      testimonial:
        "His innovative approach and attention to detail in UI design consistently enhance the overall quality of his projects.",
      name: "Adwaith C",
      designation: "Full Stack Developer",
      image: adwaith,
      portfolio_link: "https://adwaith.vercel.app/"
    },
    {
      testimonial:
        "His proficiency in both front-end technologies and back-end frameworks is impressive",
      name: "Soji Pavithran",
      designation: "Automation Test Engineer ",
      image: soji,
      portfolio_link: "#"
    },
  ];
  
  const projects = [
    {
      name: "Matrify",
      description:
        "A dynamic matrimonial website designed to connect individuals seeking meaningful relationships. Features include profile management, and real-time chat and video call capabilities, providing a comprehensive platform for matchmaking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: matrify, // Replace with the actual image variable
      source_code_link: "https://github.com/sayand-ak/Matrify-frontend", // Replace with your actual repository link
      live_link: "https://matrify-frontend.vercel.app/", // Replace with your actual repository link
    },
    {
      name: "Sneaker Hub",
      description:
        "An e-commerce platform with features such as product listing, user authentication, and payment integration. This project focuses on delivering a seamless shopping experience with responsive design and secure transactions.",
      tags: [
        {
          name: "vanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: bigbag, // Replace with the actual image variable
      source_code_link: "https://github.com/sayand-ak/BigBag", // Replace with your actual repository link
      live_link: "https://bigbag.onrender.com/", // Replace with your actual repository link
    },
    {
      name: "Blogger",
      description:
        "A blog website that allows users to create, edit, and publish articles. Features include user management, content moderation, and comment sections, aimed at providing an engaging and user-friendly blogging experience.",
      tags: [
        {
          name: "vanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: blogger, // Replace with the actual image variable
      source_code_link: "https://github.com/sayand-ak/Blogger", // Replace with your actual repository link
      live_link: "https://blogger-1.onrender.com/", // Replace with your actual repository link
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };