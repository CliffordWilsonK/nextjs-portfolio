import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>Django</Chip>
            <Chip>FastAPI</Chip>
            <Chip>MySQL</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>Heroku</Chip>
            <Chip>DigitalOcean</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>React Native</Chip>
            <Chip>Solidity</Chip>
            <Chip>Python</Chip>
            <Chip>Flask</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
