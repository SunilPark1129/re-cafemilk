/*
Component: Menu
Purpose: This is where the user sees the list of drinks sold in the cafe.

Developer: Sunil Park
*/

import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";
import { StyledMenu } from "../../components/styles/Menu.styled";
import { useEffect } from "react";

const Menu = () => {
  const [filter, setFilter] = useState({
    based: "all",
    taste: "all",
    sort: "all",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This will display the drink (array).
  // Receiving the data from the Aside component.
  const [menu, setMenu] = useState(null);

  return (
    <StyledMenu>
      <Aside
        filter={filter}
        setFilter={(obj) => setFilter(obj)}
        setMenu={(arr) => setMenu(arr)}
      />
      <Main menu={menu} />
    </StyledMenu>
  );
};

export default Menu;
