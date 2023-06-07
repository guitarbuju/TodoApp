// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import menuStyles from '../Drop-down-menu/menu.module.css'
import {NavLink} from 'react-router-dom'

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
      <button className={menuStyles.dropdown_toggle} onMouseDown={toggleMenu} onFocus={handleFocus} onBlur={handleBlur}>
        . . .
      </button>
      {isMenuOpen && (
        <ul className={menuStyles.dropdown_menu}>
          <li><NavLink to="/today">Today`s</NavLink></li>
          <li><NavLink to="/inProgress">In Progress</NavLink></li>
          <li><NavLink to="/completed">Completed</NavLink></li>
          <li><NavLink to="/allTasks">all Tasks</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
