import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiJavascript, SiMongodb, SiNeovim,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is my portfolio.",
        technologies: [SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://tilak.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Aamdani",
        description:
            "a cross-platform app to file your ITR",
            technologies: [SiReact, SiNodedotjs, SiMongodb],
            techNames: ["React", "NodeJs", "MongoDB"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://aamdani.co/",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 2,
        name: "MTSS",
        description:
            "your vechicle health inspection stop",
            technologies: [SiReact, SiNodedotjs, SiMongodb],
            techNames: ["React", "NodeJs", "MongoDB"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.mtsstechnologies.com/",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 3,
        name: "keshroot",
        description:
            "an e-commerce website created by me for hair products.",
            technologies: [SiReact, SiNodedotjs, SiMongodb],
            techNames: ["React", "NodeJs", "MongoDB"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.keshroot.com/",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 4,
        name: "zerozero",
        description:
            "an e-commerce website created by me for skin-care products.",
            technologies: [SiReact, SiNodedotjs, SiMongodb],
            techNames: ["React", "NodeJs", "MongoDB"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.zerozeroindia.com/",
        image: "/projects/construction.webp",
        available: true,
    },
];
