/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shah",
  title: "Hi, I'm Shahzaib Hassan",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of building Web and Mobile applications with Python Django, Fast Api, Flask / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink: process.env.PUBLIC_URL + "/updated_resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahzaib512",
  linkedin: "https://www.linkedin.com/in/shahzaibshah512/",
  gmail: "shahzaibshah0028@gmail.com",
  gitlab: "https://gitlab.com/shahzaib512",
  facebook: "https://www.linkedin.com/in/shahzaibshah512/",
  medium: "https://medium.com/@shahzaibshah0028",
  stackoverflow: "https://stackoverflow.com/users/22597772/zaibe-x",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end and Backend User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Army Public School PMA KAKUL",
      logo: require("./assets/images/aps.png"),
      subHeader: "SSC in Computer Science",
      duration: "January 2015 - April 2017"
    },
    {
      schoolName: "Army Public School PMA KAKUL",
      logo: require("./assets/images/aps.png"),
      subHeader: "HSSC in Computer Science",
      duration: "March 2017 - April 2019"
    },
    {
      schoolName: "Comsats University Abbottabad",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "Graduated in 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "FYP HealthTracker Pro: A Comprehensive Health Monitoring System"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "GlobalCiTECH",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "January 2024 – June 2024",
      desc:
        "Worked on the Site Vision Pro project using Django, React, and Google Maps API. Developed RESTful\n" +
        "APIs, integrated geolocation services, and collaborated with frontend developers for seamless\n" +
        "integration. Designed database schemas and optimized queries for performance."
    },
    {
      role: "Python Django Developer",
      company: "Upwork",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "January 2022 – Present",
      desc:
        "Developed and deployed Full-Stack web applications with Django, Python, and React, incorporating\n" +
        "RESTful APIs and third-party integrations. Conducted web scraping tasks using Selenium and\n" +
        "Scrapy, leveraging Docker for ecient containerization. Managed PostgreSQL databases,\n"
    },
    {
      role: "Software Engineer",
      company: "OneKode",
      companylogo: require("./assets/images/onekode.png"),
      date: "November 2024 – May 2025",
      desc:
        "Developed scalable and secure RESTful APIs using Django REST Framework, optimizing database interactions with Django ORM for performance and scalability.\n" +
        "Designed and maintained PostgreSQL databases.\n" +
        "Led collaborative efforts with cross-functional teams to deliver scalable solutions."
    },
    {
      role: "Python Developer",
      company: "DevGate",
      companylogo: require("./assets/images/picture.jpeg"),
      date: "May 2025 – Present",
      desc:
        "Developed scalable and secure RESTful APIs using Django REST Framework, optimizing database interactions with Django ORM for performance and scalability.\n" +
        "Designed and maintained PostgreSQL databases.\n" +
        "Led collaborative efforts with cross-functional teams to deliver scalable solutions."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/SVP.png"),
      projectName: "Global Site Vision Pro",
      projectDesc:
        "\n" +
        "SiteVision Pro is a user-friendly outdoor augmented reality system that brings data to life so you can visualize and explore complex information with unrivaled accuracy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sitevision.trimble.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Tlogo-500.png"),
      projectName: "Talabat",
      projectDesc: "is an ecommerce project",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.talabat.com/egypt?isFromOtlob=true"
        }
      ]
    },
    {
      image: require("./assets/images/Logo 1.png"),
      projectName: "Capstone",
      projectDesc:
        "A real estate management system with 4 user roles: super admin, tenant, landlord, and finance.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://capstone.onekode.com/"
        }
      ]
    },
    {
      image: require("./assets/images/second.png"),
      projectName: "DroneTrax",
      projectDesc:
        "A drone management system with 5 user roles: super admin, company admin, operator, manager.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://drone-trax-fe.95.168.174.206.nip.io/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python (Basic)Certificate",
      subtitle:
        "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.",
      image: require("./assets/images/Amazon_Web_Services-Logo.wine.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/f0ce23e6c18e"
        }
      ]
    },
    {
      title: "RestFul API's",
      subtitle:
        "Developed and integrated API's by using DRF(Django restframework)" +
        "and how to use Json web tokens for authentications",
      image: require("./assets/images/ibm.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/3efd87926c05"
        }
      ]
    },

    {
      title: "Software Engineer Intern",
      subtitle:
        "Completed Software Engineer Intern\n" +
        "It covers topics like Problem solving and SQL.",
      image: require("./assets/images/aws.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/81426b2ff109"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@shahzaibshah0028/django-ai-assistant-a-game-changer-for-building-intelligent-applications-d58b2c4b4a3d",
      title: "Django Ai Assisstant",
      description:
        "Django ai assistant for building intelligent applications in Django using ai and RAG."
    },
    {
      url: "https://medium.com/@shahzaibshah0028/django-ai-assistant-a-game-changer-for-building-intelligent-applications-d58b2c4b4a3d",
      title:
        "My Journey into the World of Programming: A Story of Resilience and Passion",
      description:
        "The Start of My Journey: From Accountant to Aspiring Programmer"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE 😅"),

  talks: [
    {
      title: "Django ai assistant",
      subtitle: "Django Ai assistant",
      slides_url:
        "https://medium.com/@shahzaibshah0028/django-ai-assistant-a-game-changer-for-building-intelligent-applications-d58b2c4b4a3d",
      event_url:
        "https://medium.com/@shahzaibshah0028/django-ai-assistant-a-game-changer-for-building-intelligent-applications-d58b2c4b4a3d"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: ["https://www.youtube.com/embed/9JR0JeQFuag"],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: process.env.PUBLIC_URL + "/updated_resume.pdf",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923099718473",
  email_address: "shahzaibshah0028@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Only_Shah555", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

// Linkdien post
export const linkedinDetails = {
  display: true,
  profileUrl: "https://www.linkedin.com/in/shahzaibshah512/",
  profileId: "7266340797082423296" // Replace with actual post or share ID
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
