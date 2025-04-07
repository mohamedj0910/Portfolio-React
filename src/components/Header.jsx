import { useState } from "react";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <h2 className="logo">
        <a href="#home">
          <span className="portfo">Portfo</span>
          <span className="lio">lio</span>
        </a>
      </h2>

      <nav style={{ left: isMenuOpen ? '0px' : '-100dvw' }}>
        <ul>
          <li><a href="#home" className="nav-links" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-links" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="nav-links" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-links" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-links" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="menu-btn" onClick={toggleMenu}>
        <i
          className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} icon`}
          style={{ color: isMenuOpen ? 'crimson' : 'white' }}
        ></i>
      </div>
    </header>
  );
}

export default Header