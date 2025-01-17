import "./navlinks.scss";
import React from "react";
import image from "../../../shared/images/logo.png";

const NavLinks: React.FC<any> = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>Buy</li>
        <li>Rent</li>
        <li>Sell</li>
        <li>Home loans</li>
        <li>Rent Finder</li>
      </ul>
      <img
        src={image}
        alt="zillow-logo"
        style={{ height: "5rem", width: "8rem" }}
      />
      <ul className="nav-links">
        <li>Advertise</li>
        <li>Manage Rentals</li>
        <li>Help</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default NavLinks;
