import React from "react";
import MainPage from "/Images/Portfolio/MainPage.png";
import Home from "/Images/ShopEase/Home.png";
import HomePage from "/Images/Weddingzz/HomePage.png";
import { useNavigate } from "react-router-dom";

function Project1() {
  const navigate = useNavigate();
  function handleShopease(e) {
    e.preventDefault();
    navigate("ShopEase");
  }
  function handleWeddingzz(e) {
    e.preventDefault();
    navigate("Weddingzzz");
  }
  function handleHetainCodes(e) {
    e.preventDefault();
    navigate("HetainCodes");
  }
  return (
    <div>
      <div className="flex flex-wrap mt-10 items-center justify-center md:justify-evenly px-5">
        <div className="min-h-96 w-full md:w-2/4 flex flex-col items-center justify-evenly p-6 md:p-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-black font-serif">
            ShopEase
          </p>
          <p className="text-black text-base md:text-xl font-semibold text-center leading-relaxed">
            ShopEase is a dynamic e-commerce web application that provides a
            seamless shopping experience. The platform fetches real-time product
            data from an API and allows users to browse and add items to their
            cart with a single click.
          </p>
          <button
            className="text-red-800 font-bold m-5 text-xl"
            onClick={(e) => handleShopease(e)}
          >
            Know More
          </button>
        </div>
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src={Home}
            alt="Home Page"
            className="w-80 md:w-96 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-10 items-center justify-center md:justify-evenly px-5">
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src={MainPage}
            alt="Home Page"
            className="w-80 md:w-96 shadow-lg rounded-lg"
          />
        </div>
        <div className="min-h-96 w-full md:w-2/4 flex flex-col items-center justify-evenly p-6 md:p-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-black font-serif">
            HetainCodes
          </p>
          <p className="text-black text-base md:text-xl font-semibold text-center leading-relaxed">
            Hetain’s Code Hub is a showcase of my journey as a frontend
            developer, where I craft seamless and interactive digital
            experiences. With expertise in React, JavaScript, HTML, CSS, and API
            integrations, I build responsive and dynamic web applications. My
            projects range from admin dashboards and e-commerce platforms to
            GitHub repo explorers and event management solutions, each
            reflecting my passion for clean code and modern UI/UX.
          </p>
          <button
            className="text-red-800 font-bold text-xl mt-5"
            onClick={(e) => handleHetainCodes(e)}
          >
            Know More
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 items-center justify-center md:justify-evenly px-5">
        <div className="min-h-96 w-full md:w-2/4 flex flex-col items-center justify-evenly p-6 md:p-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-black font-serif">
            weddingzzz
          </p>
          <p className="text-black text-base md:text-xl font-semibold text-center leading-relaxed">
            Weddingzzz is an on-demand platform that enhances weddings with
            personalized services. We bring expert costume designers, makeup
            artists, and dance instructors to clients' homes, ensuring
            convenience and elegance. Our mission is to make every celebration
            extraordinary by blending tradition with modern trends.
          </p>
          <button
            className="text-red-800 font-bold text-xl mt-5"
            onClick={(e) => handleWeddingzz(e)}
          >
            Know More
          </button>
        </div>
        <div className="w-full md:w-2/4 flex justify-center">
          {" "}
          <img
            src={HomePage}
            alt="Home Page"
            className="w-80 md:w-96 shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Project1;
