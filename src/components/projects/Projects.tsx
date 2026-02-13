import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Macintosh OS (Portfolio)",
    imgSrc: "project-imgs/macos.jpg",
    code: "https://github.com/CliffordWilsonK/macintosh-os",
    projectLink: "https://techcosmocrat-macos.vercel.app/",
    tech: ["TypeScript", "Framer Motion", "Tailwind", "NextJS"],
    description:
      "A portfolio website designed to look like an old macintosh OS. Built with NextJS and Framer Motion. This is the project you&apos;re currently looking at, so you should be pretty familiar with it by now.",
    modalContent: (
      <>
        <p>
          This portfolio website is a project I built to showcase my skills and
          projects. I wanted to create something that was visually unique and
          memorable, while also being a fun challenge to build. The design is
          inspired by the classic Macintosh OS, with a modern twist.
        </p>
        <p>
          The site is built with NextJS for server-side rendering and routing,
          Tailwind for styling, and Framer Motion for animations. I&apos;m
          really happy with how it turned out, and it&apos;s been a great way to
          learn and experiment with new technologies.
        </p>
        <p>
          Since you&apos;re already here, I won&apos;t bore you with the details
          of the tech stack. Instead, I&apos;ll just say that this project was a
          labor of love, and I hope it gives you a good sense of my style and
          skills as a developer.
        </p>
      </>
    ),
  },
  {
    title: "Ecstatic Learn",
    imgSrc: "project-imgs/ecstatic.jpg",
    code: "https://www.github.com/CliffordWilsonK",
    projectLink: "https://ecstaticlearn.netlify.app/",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "pdf.js"],
    description:
      "A document-to-flashcard generator that parses PDFs to create active recall study materials and interactive quizzes ",
    modalContent: (
      <>
        <p>
          Ecstatic Learn is a project I built to help students study more
          effectively. The idea is to take a PDF document, such as a textbook
          chapter or lecture notes, and automatically generate flashcards and
          quizzes to help students actively recall the material. It&apos;s built
          with React.js and TypeScript for the frontend, Tailwind CSS for
          styling, and pdf.js for parsing PDF documents.
        </p>
        <p>
          The project is still in its early stages, but I&apos;m really excited
          about the potential of this tool to help students learn more
          efficiently. The flashcards and quizzes are designed to be interactive
          and engaging, with features like spaced repetition and progress
          tracking to help students stay motivated and on track with their
          studies.
        </p>
        <p>
          This project was a great opportunity for me to experiment with new
          technologies and build something that I think could have a real impact
          on students&apos; learning experiences. I&apos;m looking forward to
          continuing to develop and improve Ecstatic Learn in the future.
        </p>
      </>
    ),
  },
  {
    title: "Paradise Nursery",
    imgSrc: "project-imgs/plant-nursery.jpg",
    code: "https://github.com/CliffordWilsonK/e-plantShopping.git",
    projectLink: "https://cliffordwilsonk.github.io/e-plantShopping/",
    tech: ["React.js", "Redux", "JavaScript"],
    description:
      "A complete retail interface with dynamic product filtering, search functionality, and client-side shopping cart management ",
    modalContent: (
      <>
        <p>
          Paradise Nursery is an e-commerce website I built as a project to
          practice building a complete retail interface. The site features
          dynamic product filtering, search functionality, and client-side
          shopping cart management. It&apos;s built with React.js for the
          frontend and Redux for state management.
        </p>
        <p>
          The goal of this project was to create a seamless and user-friendly
          shopping experience. Users can browse through a variety of plants,
          filter them by category or price, search for specific products, and
          manage their shopping cart all within the client side of the
          application.
        </p>
        <p>
          This project was a great opportunity for me to work on building a
          full-featured e-commerce site and to practice using React and Redux
          together to manage complex state in a scalable way. I&apos;m really
          happy with how it turned out, and it&apos;s been a valuable learning
          experience for me as a developer.
        </p>
      </>
    ),
  },
  {
    title: "RentEasy",
    imgSrc: "./project-imgs/renteasy.jpg",
    code: "https://www.github.com/CliffordWilsonK",
    projectLink: "https://renteasy.gt.tc/",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    description:
      "A dual-dashboard rental solution allowing landlords to list properties and tenants to search and manage applications ",
    modalContent: (
      <>
        <p>
          RentEasy is a dual-dashboard rental management system I built to help
          landlords and tenants manage rental properties more efficiently. The
          system features separate dashboards for landlords and tenants, with
          functionality for property listing, tenant search, and application
          management.
        </p>
        <p>
          Landlords can create and manage property listings, while tenants can
          search for available rentals, submit applications, and track their
          application status. The project is built with PHP for the backend,
          JavaScript for interactivity, Bootstrap for styling, and MySQL for
          database management.
        </p>
        <p>
          This project was a great opportunity for me to work on building a
          complete web application with both frontend and backend components. It
          allowed me to practice my skills in PHP and MySQL while also creating
          a useful tool for landlords and tenants. I&apos;m really proud of how
          it turned out and the functionality it provides.
        </p>
      </>
    ),
  },
];
