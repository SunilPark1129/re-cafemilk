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
  StyledNavbarContainer,
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
    <StyledNavbar>
      <StyledNavbarContainer>
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
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
