import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import NavBar from "../Components/NavBar";

const ResumeShowcase = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="w-full max-w-4xl text-center py-12">
          <h1 className="text-5xl font-extrabold text-blue-500">
            Hetain Sharma
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Frontend Developer | JavaScript Enthusiast | UI Development | API
            Integration
          </p>
        </div>

        {/* Contact Details */}
        <div className="w-full max-w-4xl flex flex-wrap justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <FaPhone /> <span>+91 9310009651</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <FaEnvelope /> <span>hetainsharma88@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <FaMapMarkerAlt /> <span>Delhi, India</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full max-w-4xl flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/hetain-sharma-483882280/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
          >
            <FaLinkedin size={20} /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Hetain-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            <FaGithub size={20} /> <span>GitHub</span>
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition"
          >
            <FaExternalLinkAlt size={20} /> <span>Vercel</span>
          </a>
        </div>

        {/* Resume Section */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl font-semibold text-blue-400">Summary</h2>
          <p className="text-gray-300 mt-2">
            A JavaScript enthusiast eager to start my career in the IT industry.
            My experience as a Frontend Developer at Grooves Lifestyle has
            equipped me with skills in developing responsive UI components and
            integrating APIs.
          </p>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold text-blue-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-gray-300">
            <span className="bg-gray-700 px-4 py-2 rounded-lg">React</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">JavaScript</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">HTML & CSS</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              API Integration
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              Tailwind CSS
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Redux</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold text-blue-400">Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl text-gray-300 font-semibold">
              Frontend Developer - Grooves Lifestyle
            </h3>
            <p className="text-gray-400 text-sm">Dec 2024 - Present | Remote</p>
            <ul className="list-disc text-gray-300 ml-6 mt-2">
              <li>Developed responsive UI components</li>
              <li>Integrated APIs for real-time data</li>
              <li>Optimized frontend performance</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold text-blue-400">Education</h2>
          <p className="text-gray-300 mt-2">
            <span className="font-semibold">BCA</span> - Bharati Vidyapeeth
            (2022 - 2025)
          </p>
        </div>

        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold text-blue-400">Projects</h2>
          <div className="mt-4">
            <h3 className="text-xl text-gray-300 font-semibold">Weddingzzz</h3>

            <p className="text-gray-300 mt-1">
              A wedding service platform offering expert makeup, choreography,
              and custom attire.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-300 font-semibold">
              Hetain Codes
            </h3>

            <p className="text-gray-300 mt-1">
              A professional portfolio showcasing various frontend development
              projects.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-300 font-semibold">ShopEase</h3>

            <p className="text-gray-300 mt-1">
              An e-commerce web application for seamless product browsing and
              shopping experience.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl text-center py-10">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hetain Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeShowcase;
