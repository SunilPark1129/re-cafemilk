import styled from "styled-components";

export const StyledMenu = styled.main`
  display: flex;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const StyledMenuAside = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1 1 10%;
  padding: 1em;
  box-shadow: 5px 0px 3px -2px ${({ theme }) => theme.colors.shadow};

  p {
    padding: 1rem 0;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    box-shadow: 0px 5px 3px -2px transparent;
    p {
      padding: 0;
    }
  }
`;

export const StyledMenuAsideCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 1em;
  }
`;

export const StyledMenuAsideFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  button {
    border: none;
    font-size: 1em;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    background-color: #dfdfdf;
    color: ${({ theme }) => theme.colors.btnFont};
    cursor: pointer;
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;

    &:hover,
    &.isActive {
      color: white;
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    p {
      flex: 1 1 100%;
    }
    button {
      margin: 0;
    }
  }
`;

export const StyledMenuPage = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;

export const StyledMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: ${({ theme }) => theme.colors.darkFont};
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.mild};
  border-radius: 4px;
`;

export const StyledMenuCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  > h4 {
    padding-top: 1em;
    font-size: 1.3em;
    position: relative;
    color: ${({ theme }) => theme.colors.darkFont};
  }
`;

export const StyleMenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
  gap: 0.4em;
`;

export const StyledMenuImage = styled.div`
  display: flex;
  height: 5em;
  width: 5em;
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
  background-color: #b1a5a5;

  img {
    height: 130%;
    object-fit: cover;

    transition-property: height;
    transition-duration: 0.3s;
  }
`;

export const StyledMenuItem = styled.div`
  flex: 1 1 40%;
  height: 8em;
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 2em;
  border-radius: 0.5em;
  cursor: pointer;
  background-color: #dfdfdf;
  transition: background-color 0.3s;

  p {
    font-weight: bold;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    > div {
      background-color: ${({ theme }) => theme.colors.mild};
    }

    ${StyledMenuImage} {
      img {
        height: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0 0 100%;
  }
`;

export const StyledMenuMargin = styled.div`
  flex: 1 1 40%;
`;

export const StyledMenuPageArrayEmpty = styled.div`
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
