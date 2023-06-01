// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import menuStyles from '../Drop-down-menu/menu.module.css'


const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleFocus = () => {
    setMenuOpen(true);
  };

  const handleBlur = () => {
    // Use setTimeout to allow time for the click event to trigger
    setTimeout(() => {
      if (!dropdownRef.current.contains(document.activeElement)) {
        setMenuOpen(false);
      }
    }, 0);
  };

  return (
    <div className={menuStyles.dropdown} ref={dropdownRef}>
      <button className={menuStyles.dropdown_toggle} onClick={toggleMenu} onFocus={handleFocus} onBlur={handleBlur}>
        . . .
      </button>
      {isMenuOpen && (
        <ul className={menuStyles.dropdown_menu}>
          <li><a href="#">Completed</a></li>
          <li><a href="#">in Progress</a></li>
          <li><a href="#">Removed</a></li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
