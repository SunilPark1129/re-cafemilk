import styled, { keyframes } from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-wrap: wrap;
  /* gap: 2rem; */
`;

export const StyledHomeHeader = styled.header`
  flex: 1 1 100%;
  border-bottom: 4px solid black;

  img {
    width: 100%;
    height: 20em;
    object-fit: cover;
  }
`;

export const StyledHomeHeaderParagraph = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2em;
  gap: 2em;
  min-height: 20rem;

  h1 {
    color: #3b332a;
  }

  p {
    max-width: 20rem;
    font-size: 1.1em;
  }
`;

export const StyledHomeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 2rem;
  }
`;

export const StyledHomeSection = styled.section`
  display: flex;
  width: 100%;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    &:nth-of-type(n) {
      flex-direction: column-reverse;
    }
  }
`;

const starAni = keyframes`
  0% {
    color: ${({ theme }) => theme.colors.main};
    transform: translateY(0);
  }
  40% {
    color: #82c76d;
    transform: translateY(-.5rem);
  }
  50% {
    color: ${({ theme }) => theme.colors.main};
    transform: translateY(-.2rem);
  }
  60% {
    color: #82c76d;
    transform: translateY(-.5rem);
  }
  100% {
    color: ${({ theme }) => theme.colors.main};
    transform: translateY(0);
  }
`;

export const StyledHomeText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-height: 10rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.main};
    text-decoration-thickness: 0.2rem;
    text-decoration-style: dashed;
  }

  p {
    max-width: 20em;
  }

  span {
    color: ${({ theme }) => theme.colors.main};
    &.visible {
      animation: 1s ${starAni} linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    border-bottom: 1px dotted #cccccc;
  }

  a {
    padding: 0.5rem 1rem;
    width: 100%;
    max-width: 24rem;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.darkFont};
    font-weight: bold;
    display: flex;
    justify-content: center;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const StyledHomeImage = styled.div`
  width: 100%;
  height: 24em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
    transition: 0.3s filter ease-in-out;

    &.visible {
      filter: brightness(80%);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 16rem;
  }
`;
