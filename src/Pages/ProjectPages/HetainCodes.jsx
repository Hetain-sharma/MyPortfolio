import React from "react";
import NavBar from "../../Components/NavBar";

const HetainCodes = () => {
  const projects = [
    {
      title: "Project 1",
      description: `  An e-commerce web application for seamless product browsing and
              shopping experience.`,
      imgSrc: "/Images/Portfolio/ShopEase.png",
      liveLink: "https://shop-ease-psi-eight.vercel.app/",
      repoLink: "https://github.com/Hetain-sharma",
    },
    {
      title: "Project 2",
      description: `A professional portfolio showcasing various frontend development
              projects.`,
      imgSrc: "/Images/Portfolio/MainPage.png", // Replace with actual path
      liveLink: "https://shop-ease-psi-eight.vercel.app/",
      repoLink: "https://github.com/Hetain-sharma",
    },
    {
      title: "Project 3",
      description: `A wedding service platform offering expert makeup, choreography,
              and custom attire.`,
      imgSrc: "/Images/Portfolio/Weddingzzz.png", // Replace with actual path
      liveLink: "https://weddingzz.vercel.app/",
      repoLink: "https://github.com/Hetain-sharma",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="w-full max-w-7xl text-center py-12">
          <h1 className="text-5xl font-extrabold text-blue-500">
            Hetain Codes
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Showcasing innovative web applications with cutting-edge
            technologies.
          </p>
        </div>

        {/* Projects Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl font-semibold text-gray-200 text-center mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h3 className="text-center text-xl font-medium text-blue-400 mt-4">
                  {project.title}
                </h3>
                <p className="text-center text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={project.liveLink}
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-md text-white hover:bg-gray-800"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl text-center py-10">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hetain Codes. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HetainCodes;
