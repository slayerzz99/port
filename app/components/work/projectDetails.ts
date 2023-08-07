import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiJavascript, SiNeovim,
    SiNextdotjs,
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
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://tilak.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "keshroot",
        description:
            "an e-commerce website created by me for hair products.",
            technologies: [SiJavascript, SiReact, SiTailwindcss],
            techNames: ["JavaScript", "React", "Tailwind CSS"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.keshroot.com/",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 2,
        name: "zerozero",
        description:
            "an e-commerce website created by me for skin-care products.",
            technologies: [SiJavascript, SiReact, SiTailwindcss],
            techNames: ["JavaScript", "React", "Tailwind CSS"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.zerozeroindia.com/",
        image: "/projects/construction.webp",
        available: true,
    },
];
