
import React, { useState } from 'react';
import contact from '../Assets/contact.jpg'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <span className="icon" onClick={toggleDropdown}>
        &#9660;
        <img src={contact} alt="" />
      </span>
      {isOpen && (
        <div className="dropdown-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni. Recusandae, minus?
          </p>
          
        </div>
      )}
    </div>
  );
}

export default Dropdown;
