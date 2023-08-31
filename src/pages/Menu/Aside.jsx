/*
Component: Main
Purpose: This is where the user sees the list of drinks sold in the cafe.

Developer: Sunil Park
*/

import React, { useEffect } from "react";
import { obj, lists } from "../../data/data";
import {
  StyledMenuAside,
  StyledMenuAsideCategory,
  StyledMenuAsideFilter,
} from "../../components/styles/Menu.styled";

const Aside = ({ filter, setFilter, setMenu }) => {
  const menuFilter = obj;
  const data = lists;

  // Changes the name that will be used in the filter to the corresponding child in object.
  function basedClickHandler(e) {
    setFilter((prev) => ({
      ...prev,
      [e.target.dataset.value]:
        e.target.name === filter[e.target.dataset.value]
          ? "all"
          : e.target.name,
    }));
  }

  // Changes the array value in the menu whenever the filter is changed.
  useEffect(() => {
    let preMenuArray = new Array();
    Object.values(data).map((item, idx) => {
      preMenuArray[idx] = [];
      item
        .sort((a, b) => {
          if (filter.sort === "all") {
            if (a.name < b.name) {
              return -1;
            }
          } else if (filter.sort === "calories") {
            return a.sort.calories - b.sort.calories;
          } else if (filter.sort === "price") {
            return a.sort.price - b.sort.price;
          }
        })
        .map((item) => {
          if (
            (filter.based === "all" || item.based[filter.based] === true) &&
            (filter.taste === "all" || item.taste[filter.taste] === true)
          ) {
            preMenuArray[idx].push(item);
          }
        });
    });
    setMenu(preMenuArray);
  }, [filter]);

  return (
    <StyledMenuAside>
      <StyledMenuAsideCategory>
        {Object.getOwnPropertyNames(menuFilter).map((arr, idx) => {
          return (
            <StyledMenuAsideFilter key={arr}>
              <p>{arr.toUpperCase()}</p>
              {Object.getOwnPropertyNames(menuFilter[arr]).map((item) => {
                return (
                  <button
                    key={item}
                    name={item}
                    data-value={arr}
                    onClick={basedClickHandler}
                    className={
                      (filter.based === item && idx === 0) ||
                      (filter.taste === item && idx === 1) ||
                      (filter.sort === item && idx === 2)
                        ? "isActive"
                        : ""
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </StyledMenuAsideFilter>
          );
        })}
      </StyledMenuAsideCategory>
    </StyledMenuAside>
  );
};

export default Aside;
