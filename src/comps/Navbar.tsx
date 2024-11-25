import React from "react";
import "../styles/homepage.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"
interface props {
  home: boolean;
bg?:boolean;
}
const Navbar: React.FC<props> = ({ home,bg }) => {
  return (
    <header>
      <nav  style={{backgroundColor:bg?"#fff":"#00000000"}}>
        <h1>
          {/* <img src={logo} alt="" /> */}
          <Link to="/">AeroMingle</Link>
        </h1>
        <ul className={home ? "light" : "dark"}>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            {" "}
            <Link to="/virtual-learning-experience">Virtual Learning Experience</Link>
          </li>
          <li>
            {" "}
            <Link to="/carrer-support">Career Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
