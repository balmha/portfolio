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
  username: "Nicolas Balmaceda",
  title: "Hi all, I'm Nico",
  subTitle: emoji(
    "A passionate Sysadmin/DevOps 🚀 having an experience of designing and building complex AWS Solutions for many companies, right now evolving in the Web3 world."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iUvI3j-Ca79aRPc31j55Hp84IXvQ-hBv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/balmha",
  linkedin: "https://www.linkedin.com/in/nicolas-balmaceda/",
  gmail: "balmacedanicolas4@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Witty Sysadmin/DevOps/Solutions Architect with huge experience in building, deploying and supporting highly-scalable solutions.",
  skills: [
    emoji(
      "⚡ Creation and support of complex CI/CD solutions in many platforms (Github, Gitlab, Bitbucket, Jenkins, ArgoCD, AWS Code stack, etc.)"
    ),
    emoji("⚡ Build and deploy of multi-tier solutions to compute platforms like ECS, EKS, self-hosted Kubernetes, EC2, and whatever compute platform of main cloud providers."),
    emoji(
      "⚡ Monitoring and logging integration and troubleshooting over many platforms like Cloudwatch, Datadog, ELK Stack, Grafana, Prometheus, etc."
    ),
    emoji(
      "⚡ Migrations and modernization (Lift&Shift, Refactoring, Replatforming)."
    ),
    emoji(
      "⚡ Analysis and use of different programming languages for problem solving and self projects (Python, Javascript, Node.js, Solidity, Java)."
    ),
    emoji(
      "⚡ Implementation and support of SQL and NonSQL databases including PaaS AWS databases like RDS, DynamoDB and Redshift."
    ),
    emoji(
      "⚡ The best soft skills in the market, I have been leading huge DevOps teams, performing project management duties and applying successfully to business-level programs for an AWS Partner Advanced company."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Nacional del Noroeste - Provincia de Buenos Aires",
      logo: require("./assets/images/unnoba.png"),
      subHeader: "Degree in System Analyst",
      duration: "2015 - 2019",
      desc: "Qualified professional for the analysis and design of computer systems, software development in various languages and environments, both for Backend and Frontend development using agile methodologies. Design and implementation of database systems, data analytics and infrastructure."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Sysadmin / Networkadmin",
      progressPercentage: "100%"
    },
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Solutions Architect",
      progressPercentage: "100%"
    },
    {
      Stack: "Databases",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Solutions Architect / DevOps Engineer",
      company: "Teracloud",
      companylogo: require("./assets/images/teracloud.png"),
      date: "Jan 2022 – Jan 2024",
      desc: "Advanced knowledge and skills in providing complex solutions to large cloud architectures, optimizing security, cost, and performance, and automating manual processes",
      descBullets: [
        "Technical Lead of the DevOps team",
        "Appliance and approval to AWS programs to achieve higher business Partnership",
        "Technical Interviewer of the Talents team",
        "Supporting the Content Creation process of the Marketing Team",
        "Technical support to Sales team building high-tech solutions for new clients"
      ]
    },
    {
      role: "Head of Architecture and Innovation",
      company: "Rizobacter",
      companylogo: require("./assets/images/rizobacter.png"),
      date: "Jul 2017 – Jan 2022",
      desc: "Analysis, design, implementation and maintenance of physical/logical networking infrastructure and enterprise datacenters (cloud and on-premise)."
    },
    {
      role: "Network Administrator",
      company: "EET N°1 'Bme Mitre'",
      companylogo: require("./assets/images/eetn1.jpeg"),
      date: "Jan 2016 – Jul 2017",
      desc: "Analysis, design, implementation and maintenance of physical/logical networking infrastructure and public government servers."
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
      image: require("./assets/images/itau.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/itau.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Professional",
      subtitle: "Completed Certifcation for AWS Solutions Architect as Professional. ID: 0PCFHVHKXJEQ17KM",
      image: require("./assets/images/sapro.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/fa11a2ed-4317-48d2-9efd-ed9735c55588"},

      ]
    },
    {
      title: "AWS Certified Security - Specialty",
      subtitle: "Completed Certifcation for AWS Security as Specialty. ID: 2M1EVV31YJQEQWGP",
      image: require("./assets/images/sspecialty.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/314c26c7-648a-40f4-95ef-0db469f033fb"},

      ]
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Completed Certifcation for AWS Solutions Architect as Associate. ID: R5ZY9L9DF1B1QB3K",
      image: require("./assets/images/saassociate.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/2ed55549-eec0-4787-a25a-0816baa3fdb9"},

      ]
    },
    {
      title: "AWS Certified Sysops Administrator - Associate",
      subtitle: "Completed Certifcation for AWS Sysops Administrator as Associate. ID: 9ET1755CYMB1Q53K",
      image: require("./assets/images/sysopsassociate.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/34d46ddc-c293-4f63-8069-4bb68a02eaa9"},

      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Completed Certifcation for AWS Cloud Practitioner. ID: 69ZNDH0BME4E1KCS",
      image: require("./assets/images/cloudpractitioner.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/d8c195a1-4f20-4fc8-a6f6-1e4b27d1521c"},

      ]
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      subtitle: "Completed Certifcation for CCNA 3",
      image: require("./assets/images/ccna3.png"),
      imageAlt: "CCNA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/a78e651a-530b-4d16-8364-63b2df9f6a35"},

      ]
    },
    {
      title: "Huawei ICT Competition",
      subtitle:
        "After pass the network certification HCIA and won the national competition among other 3 participants of the Network Track in my country, we traveled to Mexico to represent Argentina. The competition consisted of designing network topologies through the use of Huawei tools and solving all the problems posed by our hosts.",
      image: require("./assets/images/huaweiict.jpeg"),
      imageAlt: "Huawei Logo",
      footerLink: [
        { 
          name: "1º Prize - National award",
          url: ""
        }
      ]
    },
    {
      title: "Itaú/Red Hat Challenge",
      subtitle:
        "I won the 1st prize in the national competition, which consisted of making a playful application that can be used by young people, through which they can have fun and at the same time enter the world of finance in which they will learn to create savings accounts, invest in fixed terms, apply for credit cards, etc. Today the application is a financial game under the control of Red Hat and Banco Itaú.",
      image: require("./assets/images/itau.webp"),
      imageAlt: "Iatu Logo",
      footerLink: [
        {
          name: "1º Prize",
          url: ""
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
    "In order to apport cool stuff to the AWS community, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.teracloud.io/single-post/aws-s3-with-cloudfront-high-performance-security",
      title: "AWS S3 with CloudFront, high-performance security",
      description:
        "Amazon CloudFront is a content delivery network (CDN) service built for high-performance security, and developer convenience can be used as the frontend of many services (S3 Buckets, ELB’s, media distribution, and any other HTTP server running in ec2 instance or any other kind of host)."
    },
    {
      url: "https://www.teracloud.io/single-post/s3-website-cloudfront-cdn-with-authentication-via-aws-cognito",
      title: "S3 Website + Cloudfront CDN with Authentication via AWS Cognito",
      description:
        "In this blog we will discover a new way of deploying our web static content to a high-availability service such as AWS S3, using Cloudfront as CDN that helps you to distribute your content quickly and reliably with high speed."
    },
    {
      url: "https://www.teracloud.io/single-post/k8s-cluster-auto-scalers-autoscaler-vs-karpenter",
      title: "K8s Cluster Auto-scalers: Autoscaler vs Karpenter",
      description:
        "When we are working with workloads that dynamically demand more or fewer resources in terms of CPU or memory we need to think of solutions that allow us to deploy and fit these workloads in production. In this post we will talk about a few concepts like autoscaling"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "TALKS"
  ),

  talks: [
    {
      title: "a talk",
      subtitle: "where",
      slides_url: "slides",
      event_url: "event url"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "in another moment"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+5492477662345",
  email_address: "balmacedanicolas4@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "balmhaceda", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
