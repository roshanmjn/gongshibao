import {
    Github,
    LinkedIn,
    Mail,
    ReactJs,
    ExpressJs,
    Laravel,
    MySQL,
    Oracle,
    PostgreSQL,
    Redis,
} from "./assets/sprites";
interface ICurrentStack {
    language: string;
    base: Array<string>;
    scope: "frontend" | "backend" | "database";
    image: React.ReactNode;
}

export const salutation = "Hey there!, I'm";
export const name = "Roshan Maharjan.";
export const designation = "Software Developer.";
export const selfDescription = "Passion driven for building web applications.";
export const currentJobDesc = "Backend Developer at";
export const currentCompany = "Worldlink Communications";
export const currentCompanyLink = "https://www.worldlink.com.np";
export const currentStack: ICurrentStack[] = [
    {
        language: "React JS",
        base: ["React", "Redux", "Redux Toolkit", "Zustand", "Type Script", "Tailwind", "Ant Design", "MUI"],
        scope: "frontend",
        image: <ReactJs />,
    },
    {
        language: "Express JS",
        base: ["Node JS", "RESTApi", "GraphQL(Apollo)", "Type Script", "Sequelize", "Knex Query Builder"],
        scope: "backend",
        image: <ExpressJs />,
    },
    {
        language: "Laravel",
        base: ["PHP", "RESTApi", "GraphQL(Lighthouse)", "Eloquent ORM", "Query Builder"],
        scope: "backend",
        image: <Laravel />,
    },
    {
        language: "MySQL",
        base: ["Raw Queries", "Transactions", "Procedures"],
        scope: "database",
        image: <MySQL />,
    },
    {
        language: "PostgreSQL",
        base: ["Raw Queries", "Transactions", "Procedures"],
        scope: "database",
        image: <PostgreSQL />,
    },
    {
        language: "Oracle",
        base: ["Raw Queries", "Transactions", "Procedures", "Packages", "Functions"],
        scope: "database",
        image: <Oracle />,
    },
    {
        language: "Redis",
        base: ["cache"],
        scope: "database",
        image: <Redis />,
    },
];
export const contacts = [
    {
        name: "Github",
        link: "#github",
        element: <Github color="white" />,
    },
    {
        name: "Linked In",
        link: "#linkedin",
        element: <LinkedIn color="#0a66c2" />,
    },
    {
        name: "Email",
        link: "#email",
        element: <Mail />,
    },
];
export const projects = [
    {
        title: "Novel Reading Application",
        description:
            "Web application developed for reading novels with Cheerio, React and Express by scraping data from different sources using cheerio.",
        stacks: "React, Express, MySQL, Redux Toolkit, Cheerio",
        link: "#NovelReadingApp",
        // image: "https://picsum.photos/700/400",
        image: "novelreading.jpg",
    },
    {
        title: "BytePerks",
        description:
            "Dynamic Web application for BytePerks with customizeable components and dashboard using ReactJS, ExpressJS, TypeScript, Zustand and MySQL database.",
        stacks: "React, Express, MySQL, Zustand",
        link: "https://byteperks.com/",
        image: "byteperks.png",
    },
    {
        title: "Esports PUBG Observer",
        description:
            "This PUBG Observer is commonly used by esports broadcasters, tournament organizers, and third-party developers to create custom overlays, track player performance, analyze match data, and enhance the overall PUBG gaming experience.",
        stacks: "React, Express, Socket.io, Typescript, Sequlize, MySQL, Zustand",
        link: "https://esports.byteperks.com",
        image: "esports.png",
    },
    {
        title: "Point Of Sales Web Application",
        description:
            "Application developed for managing sales and inventory of a store using React, Express and MySQL.",
        stacks: "React, Express, Socket.io, Typescript, Sequlize, MySQL, Zustand",
        link: "https://pos.byteperks.com/",
        image: "pos.png",
    },
];
