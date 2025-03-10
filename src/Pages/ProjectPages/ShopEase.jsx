import React from "react";
import NavBar from "../../Components/NavBar";

const ShopEase = () => {
  const features = [
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
  ];

  const images = [
    {
      name: "Home Page",
      src: "/Images/ShopEase/Home.png",
      description: "Browse products with a clean interface.",
    },
    {
      name: "Cart",
      src: "/Images/ShopEase/Cart.png",
      description: "Manage your cart easily with a dynamic UI.",
    },
    {
      name: "Empty Cart",
      src: "/Images/ShopEase/EmptyCart.png",
      description: "Visual feedback when your cart is empty.",
    },
    {
      name: "Login",
      src: "/Images/ShopEase/Login.png",
      description: "Secure authentication for user accounts.",
    },
    {
      name: "Orders",
      src: "/Images/ShopEase/Orders.png",
      description: "Track past orders effortlessly in your profile.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="w-full max-w-7xl text-center py-12">
          <h1 className="text-5xl font-extrabold text-gray-800">ShopEase</h1>
          <p className="text-lg text-gray-600 mt-4">
            A seamless e-commerce experience with real-time product fetching and
            an intuitive shopping interface.
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
            Screenshots
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
            href="https://shop-ease-psi-eight.vercel.app/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
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
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopEase;
