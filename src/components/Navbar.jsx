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
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='100'>
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic text-white">Portfolio</a>
        
        {/* Mobile Menu Toggle */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} >
            <FiMenu />
          </button>
      </div>
    </header>
  );
}