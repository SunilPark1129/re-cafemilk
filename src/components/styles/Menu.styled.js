import styled from "styled-components";

export const StyledMenu = styled.main `
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const StyledMenuAside = styled.aside `
  display: flex;
  flex-direction: column;
  flex: 1 1 10%;
  padding: 1em;
  box-shadow: 10px 0px 5px -5px ${({ theme }) => theme.colors.shadow};
  gap: 2rem;

  h3 {
    padding: 1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    box-shadow: none;
    box-shadow: 0px 10px 5px 5px ${({ theme }) => theme.colors.shadow};
    h3 {
      display: none;
    }
  }
`;

export const StyledMenuAsideSection = styled.section `
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 1em;
  }
`;

export const StyledMenuAsideFilter = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  button {
    border: none;
    margin-right: auto;
    font-size: 1em;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    color: ${({ theme }) => theme.colors.btnFont};
    cursor: pointer;
    transition-property: background-color, color, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;

    &:hover,
    &.isActive {
      color: white;
      background-color: ${({ theme }) => theme.colors.main};
    }

    &.isActive {
      transform: translateX(2rem);
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    h4 {
      flex: 1 1 100%;
    }
    button {
      margin: 0;
      transition-duration: 0.3s, 0.3s, 0s;

      &.isActive {
        transform: none;
      }
    }
  }
`;

export const StyledMenuMain = styled.main `
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;

export const StyledMenuCategory = styled.section `
  display: flex;
  flex-wrap: wrap;

  h3 {
    flex: 1 1 100%;
    padding: 1em;
    font-size: 1em;
    border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  }
`;

export const StyledMenuItem = styled.article `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 19%;
  padding-bottom: 20%;
  position: relative;
  cursor: pointer;
  margin: 3%;

  p {
    position: absolute;
    top: 100%;
    padding: 0.5rem;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.fontDark};
    font-weight: bold;
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    max-width: 200px;
    width: 80%;
    object-fit: cover;
    transition: 0.3s width;
  }

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.mild};
    border-radius: 1rem;

    p {
      color: ${({ theme }) => theme.colors.main};
    }

    > div {
      width: 40%;
      padding-bottom: 40%;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0 0 27.3%;
  }
`;

export const StyledMenuImageBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledMenuBackground = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.main};
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.light} 10%,
    ${({ theme }) => theme.colors.main} 90%
  );
  width: 80%;
  padding-bottom: 80%;
  z-index: -1;
  border-radius: 1rem;
  transition-property: width, padding;
  transition-duration: 0.3s;
`;

export const StyledMenuMainArrayEmpty = styled.div `
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 3em;
  }
  h4 {
    font-size: 2em;
  }
`;