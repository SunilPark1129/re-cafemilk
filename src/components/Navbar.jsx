/*
Component: Navbar

Developer: Sunil Park
*/

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  StyledNavbar,
  StyledNavbarWrapper,
  StyledNavbarLink,
  StyledNavbarLocation,
} from "./styles/Navbar.styled";

const links = [
  {
    path: "/",
    label: "HOME",
    exect: "true",
  },
  {
    path: "/menu",
    label: "MENU",
    exect: "false",
  },
  {
    path: "/rewards",
    label: "REWARDS",
    exect: "false",
  },
];

const Navbar = () => {
  return (
    <header>
      <StyledNavbar>
        <StyledNavbarWrapper>
          <Link to="/" title="CafeMilk">
            <img src={logo} alt="cafemilk-logo" />
          </Link>
          <StyledNavbarLink>
            {links.map(({ path, label, exect }) => {
              return (
                <li key={label}>
                  <NavLink
                    to={path}
                    exect={exect}
                    className={({ isActive }) => (isActive ? "isActived" : "")}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </StyledNavbarLink>
          <StyledNavbarLocation
            href="https://www.google.com"
            target="_blank"
            title="Google Map"
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </StyledNavbarLocation>
        </StyledNavbarWrapper>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
