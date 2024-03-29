/*
Component: Home
Purpose: This page displays what this website offers.

Developer: Sunil Park
*/

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  StyledHome,
  StyledHomeHeader,
  StyledHomeHeaderParagraph,
  StyledHomeList,
  StyledHomeSection,
  StyledHomeText,
  StyledHomeImage,
} from "../../components/styles/Home.styled";
import useObserver from "../../hooks/useObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import imgEvent from "../../assets/home_event.jpg";
import imgHeader from "../../assets/home_header.jpg";
import imgHire from "../../assets/home_hire.jpg";
import imgMenu from "../../assets/home_menu.jpg";
import imgRewards from "../../assets/home_rewards.jpg";

const Home = () => {
  // To set the target scroll position.
  const menuPos = useRef(null);
  const rewardsPos = useRef(null);
  const eventPos = useRef(null);
  const hirePos = useRef(null);

  const observerOption = {
    root: null,
    rootMargin: "-100px",
    threshold: 0.1,
  };

  // Features and announcements covered by this website are listed in layout.
  // useObserver( option, scroll position, reuse this event )
  const layout = [
    {
      title: "MENU",
      description:
        "Try a variety of drinks! Find a drink that suits your taste from the menu.",
      link: true,
      image: imgMenu,
      path: "/menu",
      target: menuPos,
      isVisible: useObserver(observerOption, menuPos, true),
    },
    {
      title: "REWARDS",
      description:
        "You can use the reward system to receive benefits. Click the link for more information.",
      link: true,
      image: imgRewards,
      path: "/rewards",
      target: rewardsPos,
      isVisible: useObserver(observerOption, rewardsPos, true),
    },
    {
      title: "EVENT",
      description:
        "Is your birthday coming up? Bring a license to prove your birthday and we'll give you a free drink in any size.",
      link: false,
      image: imgEvent,
      target: eventPos,
      isVisible: useObserver(observerOption, eventPos, true),
    },
    {
      title: "HIRING",
      description:
        "Now we are hiring! We are looking for enthusiastic and friendly employees. Please visit our cafe for an interview.",
      link: false,
      image: imgHire,
      target: hirePos,
      isVisible: useObserver(observerOption, hirePos, true),
    },
  ];

  return (
    <StyledHome>
      <StyledHomeHeader>
        <img src={imgHeader} alt="inside of the cafe" />
        <StyledHomeHeaderParagraph>
          <h1>Welcome to our Cafemilk</h1>
          <p>
            We offer a variety of beverages and events. Take your time to
            explore the services we can provide for you.
          </p>
        </StyledHomeHeaderParagraph>
      </StyledHomeHeader>
      <StyledHomeList>
        {layout.map(
          ({ title, description, link, image, path, target, isVisible }) => {
            return (
              <StyledHomeSection key={title}>
                <StyledHomeText>
                  <div ref={target}>
                    <h2>{title}</h2>
                    <span className={isVisible ? "visible" : ""}>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <p>{description}</p>
                  {link ? <Link to={path}>LINK</Link> : null}
                </StyledHomeText>
                <StyledHomeImage>
                  <img
                    className={`${isVisible && "visible"}`}
                    src={image}
                    alt={title}
                  />
                </StyledHomeImage>
              </StyledHomeSection>
            );
          }
        )}
      </StyledHomeList>
    </StyledHome>
  );
};

export default Home;
