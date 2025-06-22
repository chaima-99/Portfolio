import React , {useState} from "react";
import { FiMenu,Fix } from "react-icons/fi";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks =[
    { id:1 ,name: "Home", link: "#home" },
    { id:2 ,name: "About", link: "#about" },
    { id:3 ,name: "Skills", link: "#skills" },
    { id:4 ,name: "MY projects", link: "#projects" }
    ]
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}