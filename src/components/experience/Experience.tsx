import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Self-Employed",
    position: "Freelance Software Developer ",
    time: "2026 - Present",
    location: "Remote",
    description:
      "Software Developer building a variety of projects for clients. I specialize in frontend development, but I also have experience with backend and full stack development. Work with clients to build custom web applications, mobile apps, and other software solutions. I am passionate about building software that is both functional and beautiful.",
    tech: [
      "React",
      "Python",
      "Django",
      "Git",
      "GitHub",
      "DigitalOcean",
      "Docker",
    ],
  },
  {
    title: "Cognifyz Technologies ",
    position: "Python Development Intern",
    time: "Apr 2025 - May 2025",
    location: "Remote",
    description:
      "Automated multiple tasks using Python. Used python libraries such as BeautifulSoup and Selenium to scrape data from websites and automate tasks. Built a web application using Flask to display the scraped data in a user-friendly format.",
    tech: ["Python", "BeautifulSoup", "Selenium", "Flask"],
  },
  {
    title: "Accra Academy",
    position: "Programming Team Lead",
    time: "2023 - 2024",
    location: "Accra, Ghana",
    description:
      "Taught a group of students in learning programming concepts and building projects. Organized weekly coding sessions and workshops to teach programming languages such as Python, and JavaScript. Mentored members in developing their coding skills and building their own projects.",
    tech: ["Python", "JavaScript", "React", "Git", "GitHub"],
  },
];
