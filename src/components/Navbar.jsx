import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import "./navbar.css";
import { ShoppingCart, NyTimesLogo } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "3px",
            color: "cadetblue",
          }}
        >
          <NyTimesLogo size={44} />
          <div>E-Commerce</div>
        </Link>
      </div>
      <div className="searchbar">
        <Input.Search size="large" allowClear className="search" />
      </div>
      <div className="links">
        <Link to="/cart">
          <ShoppingCart color="white" size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
