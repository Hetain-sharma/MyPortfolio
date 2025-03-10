import React from "react";
import NavBar from "../Components/NavBar";
import MySection from "../Components/MySection";
import MyServices from "../Components/MyServices";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

function Homepage() {
  const handleViewProject = () => {};
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <MySection />
      <MyServices />
      <Skills />
      <div>
        <div className="text-center">
          <p className="text-3xl font-bold bg-gradient-to-r from-red-700 to-blue-500 bg-clip-text text-transparent inline-block tracking-wide">
            MY PROJECTS
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default Homepage;
{
  /* <a
  className="my-10 bg-white text-black text-center text-xl p-5 w-52 rounded-lg font-bold"
  href="https://shop-ease-psi-eight.vercel.app/"
  >
  View ShopEase
</a> */
}

{
  /* <div className="mt-8 space-y-6">
  {[
    {
      title: "Product Listing & API Integration",
      description:
        "Fetches products dynamically from an API and displays them in a well-organized interface.",
    },
    {
      title: "Add to Cart",
      description:
        'Users can add items to their cart with an "Add to Cart" button. If an item is already in the cart, the button updates accordingly.',
    },
    {
      title: "User Authentication",
      description:
        "If a user is not logged in, they are redirected to the login page when trying to access the cart or place an order.",
    },
    {
      title: "Order Placement",
      description:
        "After adding items, users can place an order easily with a streamlined checkout process.",
    },
    {
      title: "Profile Page & Order History",
      description:
        "Users can view their past orders in their profile section, making reordering effortless.",
    },
  ].map((feature, index) => (
    <div key={index} className="flex items-center space-x-4">
      <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white text-lg font-bold rounded-full shadow-lg">
        {index + 1}
      </div>
      <div>
        <p className="text-xl font-bold text-gray-900">
          {feature.title}
        </p>
        <p className="text-gray-700 mt-1">{feature.description}</p>
      </div>
    </div>
  ))}
</div> */
}
