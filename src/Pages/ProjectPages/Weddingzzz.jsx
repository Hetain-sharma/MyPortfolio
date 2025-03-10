import React from "react";
import NavBar from "../../Components/NavBar";

const Weddingzzz = () => {
  const features = [
    {
      title: "User-Friendly Navigation & Routes",
      description:
        "Easily explore services like makeup, choreography, and costume designing with seamless navigation.",
    },
    {
      title: "Makeup Services",
      description:
        "Book top-tier makeup artists to enhance your wedding look and make every moment picture-perfect.",
    },
    {
      title: "Choreography",
      description:
        "Learn wedding dance routines from professional instructors for sangeet, mehendi, and other celebrations.",
    },
    {
      title: "Customized Costumes",
      description:
        "Get access to expert costume designers to craft unique wedding attire tailored to your vision.",
    },
    {
      title: "Booking System",
      description:
        "Effortlessly explore and book wedding services from professionals through the platform.",
    },
    {
      title: "Secure Authentication",
      description:
        "Personalized experience with a secure login system to manage bookings and preferences.",
    },
  ];

  const images = [
    {
      name: "Home",
      src: "/Images/Weddingzz/HomePage.png",
      description: "Discover the essence of Weddingzzz.",
    },
    {
      name: "Makeup",
      src: "/Images/Weddingzz/Makeup.png",
      description: "Book professional wedding makeup artists.",
    },
    {
      name: "Choreography",
      src: "/Images/Weddingzz/Coreography.png",
      description: "Learn stunning dance routines.",
    },
    {
      name: "Costume",
      src: "/Images/Weddingzz/Costume.png",
      description: "Get your personalized wedding costumes.",
    },
    {
      name: "Contact Us",
      src: "/Images/Weddingzz/Login.png",
      description: "Get in touch for service inquiries.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="w-full max-w-7xl text-center py-12">
          <h1 className="text-5xl font-extrabold text-pink-600">Weddingzzz</h1>
          <p className="text-lg text-gray-700 mt-4">
            Elevate your wedding experience with expert services at your
            doorstep.
          </p>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full max-w-7xl mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Weddingzzz Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h3 className="text-center text-lg font-medium text-gray-800 mt-4">
                  {img.name}
                </h3>
                <p className="text-center text-sm text-gray-600 mt-1">
                  {img.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="w-full max-w-7xl flex justify-center gap-6 mt-12">
          <a
            href="https://weddingzz.vercel.app/"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-pink-700 transition"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Hetain-sharma"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-900 transition"
          >
            GitHub Repository
          </a>
        </div>

        {/* Footer Section */}
        <div className="w-full text-center py-8 mt-16 text-gray-500">
          <p>© {new Date().getFullYear()} Weddingzzz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Weddingzzz;
