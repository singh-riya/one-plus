import React from "react";
import "./Header.css";
import OnePlus from "../../assets/OnePlus_s.png";
import OP_Name from "../../assets/OP_Name.jpg";

const Header = () => (
  <section className='header'>
    <div className='logo'>
      <a href='/'>
        <img src={OnePlus} alt='one plus logo' width='55px' height='55px' />
      </a>
    </div>
    <div className='logo-name'>
      <a href='/'>
        <img
          src={OP_Name}
          alt='one plus logo name'
          width='160px'
          height='50px'
        />
      </a>
    </div>
  </section>
);

export default Header;
