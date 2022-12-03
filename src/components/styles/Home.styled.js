import styled, { keyframes } from "styled-components";

export const StyledHome = styled.main `
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const StyledHomeHeader = styled.header `
  flex: 1 1 100%;
  z-index: -1;
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const StyledHomeSection = styled.section `
  display: flex;
  height: 30rem;
  flex: 1 1 100%;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
  }
  &:nth-of-type(3),
  &:nth-of-type(4) {
    flex-direction: row-reverse;
    flex: 1 1 40%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    &:nth-of-type(n) {
      flex: 1 1 100%;
      flex-direction: row;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    &:nth-of-type(n) {
      flex-direction: column-reverse;
      border-bottom: 1px dotted ${({ theme }) => theme.colors.mild};
    }
  }
`;

const starAni = keyframes `
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

export const StyledHomeText = styled.article `
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
  padding: 2rem;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  h3 {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.main};
    text-decoration-thickness: 0.2rem;
    text-decoration-style: dashed;
  }

  span {
    color: ${({ theme }) => theme.colors.main};
    &.visible {
      animation: 1s ${starAni} linear;
    }
  }

  a {
    margin-right: auto;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.darkFont};
    font-weight: bold;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const StyledHomeImage = styled.div `
  flex: 1 1 60%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 1 1 100%;
    max-height: 15rem;
  }
`;