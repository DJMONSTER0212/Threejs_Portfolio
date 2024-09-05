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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    graviti,
    chatters,
    threejs,
    tnit,
    huygensLab,
    precollege,
    ecommerce
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "NextJs Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Competitive Programmer",
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
        name: "Three JS",
        icon: threejs,
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
        title: "Full Stack Developer",
        company_name: "TNIT Services",
        icon: tnit,
        iconBg: "#ffffff",
        date: "Nov 2023 - Feb 2024",
        points: [
            "Spearheaded the development and implementation of event synchronization and event checking features for iCal Links, seamlessly connecting booking management system with external calendars, resulting in a 30% increase in operational efficiency.",
            "BeingStay acts as Hotel and Villa Booking application with admin portal for managing the Portal.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Huygens Lab - Growth Farms",
        icon: huygensLab,
        iconBg: "#ffffff",
        date: "Feb 2024 - May 2024",
        points: [
            "Led the primary project focusing on resolving performance and functionality issues with the client’s website. The website is built on Next.js utilizing Tailwind CSS, Material UI, ShadcnUI, and AWS.",
            "Oversaw daily updates and maintenance of client’s websites, addressing SEO, pop-up modifications, and design/layout changes as required.",
            "Essentially, there website operated as a platform where students could choose their grade, subject, and topic to practice solving practice questions. Additionally, they offer access to video lectures corresponding to the selected topic.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "NextJs Developer",
        company_name: "Graviti",
        icon: graviti,
        iconBg: "#2e2e2e",
        date: "Jul 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Ecomerce Store and Admin Protal",
        description:
            "Empoweredusers to explore a diverse range of carefully selected items, providing detailed specifications for informed decision-making. Collaborated with the e-commerce admin panel to introduce 20+ cutting-edge products monthly, ensuring a continuously evolving shopping experience that can increase user engagement by 10% and repeat purchases by 10%. Transformed desires into tangible results, showcasing a dedication to innovation, consumer empowerment, and seamless transactions.",
        tags: [
            {
                name: "Next.JS",
                color: "blue-text-gradient",
            },
            {
                name: "PostgresSql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/DJMONSTER0212/E-commerce-Admin",
    },
    {
        name: "Chatters - A real Time chat appliation",
        description:
            "Engineered a real-time chat application with robust user authentication and authorization; enabled seamless user search and instant connectivity, resulting in a 10% increase in user engagement within the first quarter.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Node.Js",
                color: "pink-text-gradient",
            },
            {
                name: "Socket.IO",
                color: "text-[#EBF400]"
            }
        ],
        image: chatters,
        source_code_link: "https://github.com/DJMONSTER0212/Chat-App",
    },
    {
        name: "precollege",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "Next.Js",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind Css",
                color: "green-text-gradient",
            },
            {
                name: "Shadcn\\ui",
                color: "pink-text-gradient",
            },
            {
                name: "Node.js",
                color: "text-[#EBF400]",
            },
        ],
        image: precollege,
        source_code_link: "https://precollge.in",
    },
];

export { services, technologies, experiences, testimonials, projects };