import React, { useState } from "react";
import image from "../assets/image.png"; // Update with your logo path
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 pl-20 pr-20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Hamburger button for small screens */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Flex order for small screens, logo on the right */}
          <div className="flex items-center sm:order-none order-last">
            <Link to="/">
              <img className="h-12 w-12" src={image} alt="logo" />
            </Link>
          </div>

          {/* Links for larger screens */}
          <div className="hidden sm:flex space-x-4 text-white">
            <Link className="hover:text-blue-400" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-400" to="Technologies">
              Technologies
            </Link>
            <Link className="hover:text-blue-400" to="Projects">
              Projects
            </Link>
            <Link className="hover:text-blue-400" to="Experience">
              Experience
            </Link>
            <Link className="hover:text-blue-400" to="Education">
              Education
            </Link>
            <Link className="hover:text-blue-400" to="Certificates">
              Certificates
            </Link>
            <Link className="hover:text-blue-400" to="Contact">
              Contact
            </Link>
          </div>

          {/* Social icons for larger screens */}
          <div className="hidden sm:flex gap-2 text-white text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 bg-opacity-55 text-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-40`}
      >
        <div className="flex justify-between mb-4">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={toggleMenu} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            onClick={toggleMenu}
            to="/"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="Technologies"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Technologies
          </Link>
          <Link
            onClick={toggleMenu}
            to="Projects"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="Experience"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Experience
          </Link>
          <Link
            onClick={toggleMenu}
            to="Education"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Education
          </Link>
          <Link
            onClick={toggleMenu}
            to="Certificates"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Certificates
          </Link>
          <Link
            onClick={toggleMenu}
            to="Contact"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Contact
          </Link>

          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
