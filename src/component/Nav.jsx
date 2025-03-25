import Logo from "./Logo";
import React, { useState } from "react";


const nav = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);  }

  console.log(isMenuOpen);


  return (
    <div>
      <nav className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <Logo />   
          </div>

          <div className="md:hidden">
            <button className="text-black mr-6 mb-8 cursor-pointer" onClick={toggleMenu}>
              <svg 
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-14 h-14 "
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

          </div>

        

          <ul className="hidden md:flex mx-auto space-x-10 font-bold text-xl">
            <li><a href="#" className="text-black">Home</a></li>
            <li><a href="#" className="text-black">Expense</a></li>
            <li><a href="#" className="text-black">Categorie</a></li>
            <li><a href="#" className="text-black">Help</a></li>
          </ul>
        </div>


             {isMenuOpen ? (
                          <ul className="flex-col md:hidden ">
                          <li><a href="#" className="text-black  ">Home</a></li>
                          <li><a href="#" className="text-black ">Depense</a></li>
                          <li><a href="#" className="text-black ">Categorie</a></li>
                          <li><a href="#" className="text-black ">Help</a></li>
                        </ul>

             ) : null}

    
      </nav>
    </div>
  );
};

export default nav;