import React from "react";
import {
  DiCss3,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiReact,
} from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

function Skills() {
  return (
    <div className=" py-10 mt-10 text-center">
      <p className="text-3xl font-extrabold bg-gradient-to-r from-red-700 to-blue-500 bg-clip-text text-transparent inline-block tracking-wide">
        SKILLS
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center mt-8 px-5">
        {[
          { icon: <DiHtml5 color="#E34F26" />, name: "HTML" },
          { icon: <DiCss3 color="#1572B6" />, name: "CSS" },
          { icon: <DiJavascript color="#F7DF1E" />, name: "JavaScript" },
          { icon: <DiReact color="#61DAFB" />, name: "React" },
          { icon: <DiGit color="#F05032" />, name: "Git" },
          { icon: <DiGithub color="#181717" />, name: "GitHub" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-black hover:scale-110 transition-transform duration-300"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
