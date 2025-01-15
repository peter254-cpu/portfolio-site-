import { navLinks } from "../contants"
import { useState, useEffect } from "react";


const NavItems = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const current = navLinks.find(({ href }) => {
        const section = document.querySelector(href);
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        return window.scrollY >= offsetTop && window.scrollY < offsetBottom;
      });
      setActiveId(current ? current.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className={`nav-li ${id === activeId ? "active" : ""}`}>
          <a href={href} className="nav-li_a">{name}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-600">
      <div className="text-white max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Peter
          </a>
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
            <img alt="toggle" className="w-6 h-6" src={isOpen ? "assets/close.svg" : "assets/menu.svg"} />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5 items-center bg-gray-900">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
