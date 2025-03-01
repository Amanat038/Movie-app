import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <nav className="text-white bg-gray-900 shadow-md">
         <div className="container flex items-center justify-between p-4 mx-auto">
            <Link to="/">
               <img
                  className="w-12 h-12 rounded-full"
                  src="https://m.media-amazon.com/images/I/61+715bdgvL.jpg"
                  alt=""
               />
            </Link>

            <button
               className="lg:hidden focus:outline-none"
               onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
               className={`lg:flex lg:space-x-6 ${
                  isOpen ? "flex py-4 shadow-md z-50" : "hidden lg:flex"
               } absolute lg:static bg-gray-900 w-full lg:w-auto top-16 right-0 lg:flex-row transition-all duration-300 ease-in-out flex-col items-center lg:space-x-6 md:pt-10px`}
            >
               <Link
                  className="px-4 py-2 text-xl center text- hover:text-gray-300"
                  to="/"
               >
                  Home
               </Link>
               <Link
                  className="px-4 py-2 text-xl text-center hover:text-gray-300"
                  to="/search"
               >
                  Search
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
