import React from "react";

function MyServices() {
  return (
    <div>
      <div className="text-center mb-16">
        <p className="text-3xl font-bold bg-gradient-to-r from-red-700 to-blue-500 bg-clip-text text-transparent inline-block tracking-wide">
          MY SERVICES
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 mt-10">
        {/* Service Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full mx-auto md:w-[500px]">
          <p className="font-bold text-xl text-gray-900">
            Frontend Development
          </p>
          <p className="font-semibold text-gray-700 mt-2">
            Building responsive and interactive web applications using React.js,
            JavaScript, and modern frameworks like Vite.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full mx-auto md:w-[500px]">
          <p className="font-bold text-xl text-gray-900">
            UI/UX Design & Implementation
          </p>
          <p className="font-semibold text-gray-700 mt-2">
            Creating visually appealing, user-friendly, and mobile-first designs
            with Tailwind CSS, CSS3, and modern UI libraries.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full mx-auto md:w-[500px]">
          <p className="font-bold text-xl text-gray-900">API Integration</p>
          <p className="font-semibold text-gray-700 mt-2">
            Fetching and displaying real-time data by integrating REST APIs in
            web and mobile applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
