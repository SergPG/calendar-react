import React from "react";

const Aside = () => {

  return (

    < aside
      className = "relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl" >

      <div className="p-6">
        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Calendar</a>
        <button
          className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Event
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a href="calendar.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
          <i className="fas fa-calendar mr-3"></i>
          Calendar
        </a>
      </nav>

      <div className="absolute w-full bottom-0 text-white flex items-center justify-center py-4"> </div>

    </aside>
  );
};
export default Aside;