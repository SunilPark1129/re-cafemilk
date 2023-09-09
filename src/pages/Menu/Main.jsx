/*
Component: Main
Purpose: This page shows drinks by receiving filtered array values as props.

Developer: Sunil Park
*/

import React, { useState, useEffect } from "react";
import { lists } from "../../data/data";
import Content from "./Content";
import {
  StyledMenuPage,
  StyledMenuCategory,
  StyleMenuItems,
  StyledMenuItem,
  StyledMenuImage,
  StyledMenuPageArrayEmpty,
  StyledMenuMargin,
  StyledMenuHeader,
} from "../../components/styles/Menu.styled";

const Main = ({ menu }) => {
  const data = lists;

  // Check if there is a beverage in the category that has been filtered.
  const [arrayEmpty, setArrayEmpty] = useState(false);

  // When a drink is clicked, props are fetched to send information about that drink to Content.jsx.
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let isDrinkListEmpty = true;

    // Check if a drink is on the array.
    for (let idx in menu) {
      if (menu[idx].length !== 0) {
        isDrinkListEmpty = false;
      }
    }

    if (isDrinkListEmpty) {
      setArrayEmpty(true);
    }

    return () => {
      setArrayEmpty(false);
    };
  }, [menu]);

  return (
    <StyledMenuPage>
      <StyledMenuHeader>
        <h1>Pick your drink</h1>
        <p>Choose your favorite drink and check out the ingredients inside.</p>
      </StyledMenuHeader>
      {/*
      When the user clicks on the drink, the value is put into selectedItem.
      Closing the content sets the value of selectedItem back to null.
      */}
      {selectedItem !== null ? (
        <Content
          selectedItem={selectedItem}
          setSelectedItem={(isNull) => setSelectedItem(isNull)}
        />
      ) : null}

      {menu !== null ? (
        arrayEmpty ? (
          <StyledMenuPageArrayEmpty>
            <h4>The drink you selected from the options is not on the list.</h4>
            <p>Find another drink other than the one you selected.</p>
            <p>We also make other drinks that are delicious!</p>
            <p>We will try to create more diverse and delicious drinks.</p>
          </StyledMenuPageArrayEmpty>
        ) : (
          Object.getOwnPropertyNames(data).map((arr, idx) => {
            return (
              <StyledMenuCategory key={arr}>
                {menu[idx].length !== 0 ? <h4>{arr.toUpperCase()}</h4> : null}
                <StyleMenuItems>
                  {menu[idx].map((item) => {
                    return (
                      <StyledMenuItem
                        key={item.name}
                        onClick={() => setSelectedItem(item)}
                      >
                        <StyledMenuImage>
                          <img src={item.image} alt={item.name} />
                        </StyledMenuImage>
                        <p>{item.name}</p>
                      </StyledMenuItem>
                    );
                  })}
                  <StyledMenuMargin></StyledMenuMargin>
                </StyleMenuItems>
              </StyledMenuCategory>
            );
          })
        )
      ) : null}
    </StyledMenuPage>
  );
};

export default Main;
