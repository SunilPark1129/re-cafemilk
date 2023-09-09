/*
Component: Content
Purpose: Displays information about the selected beverage in Main.jsx.

Developer: Sunil Park
*/

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  StyledMenuContent,
  StyledMenuContentTextBox,
  StyledMenuContentImageBox,
  StyledMenuContentClose,
} from "../../components/styles/Content.styled";

const Content = ({ selectedItem, setSelectedItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  function closeClickHandler() {
    setSelectedItem(null);
  }
  return (
    <StyledMenuContent>
      <StyledMenuContentTextBox>
        <h3>{selectedItem.name}</h3>
        <p>{selectedItem.description}</p>
        <div>
          <p>
            <span>Calories</span> {selectedItem.sort.calories}
          </p>
          <p>
            <span>Price</span> ${selectedItem.sort.price}
          </p>
        </div>
      </StyledMenuContentTextBox>
      <StyledMenuContentImageBox>
        <img src={selectedItem.image} alt={selectedItem.name} />
        <div></div>
      </StyledMenuContentImageBox>

      <StyledMenuContentClose onClick={closeClickHandler}>
        <FontAwesomeIcon icon={faClose} />
        <div></div>
      </StyledMenuContentClose>
    </StyledMenuContent>
  );
};

export default Content;
