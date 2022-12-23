import styled from "styled-components";

export const StyledMenu = styled.main`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const StyledMenuAside = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1 1 10%;
  padding: 1em;
  gap: 2rem;

  h3 {
    padding: 1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 1rem;
    h3 {
      padding: 0;
      text-align: center;
    }
  }
`;

export const StyledMenuAsideSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

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
    color: ${({ theme }) => theme.colors.btnFont};
    cursor: pointer;
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;

    &:hover,
    &.isActive {
      color: white;
      background-color: ${({ theme }) => theme.colors.mild};
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
      transition-duration: 0.3s, 0.3s;
    }
  }
`;

export const StyledMenuMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  min-height: 100vh;
  gap: 3em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 1rem 0;
  }
`;

export const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  > h3 {
    font-size: 1.3em;
    border-bottom: 1px dotted ${({ theme }) => theme.colors.shadow};
    position: relative;
  }
`;

export const StyledMenuCategory = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledMenuImage = styled.div`
  display: flex;
  height: 5em;
  width: 5em;
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
  background-color: #c0a49c;

  img {
    height: 130%;
    object-fit: cover;

    transition-property: height;
    transition-duration: 0.3s;
  }
`;

export const StyledMenuItem = styled.article`
  flex: 1 1 40%;
  height: 8em;
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 2em;
  border-radius: 0.5em;
  cursor: pointer;

  p {
    font-weight: bold;
  }

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.mild};

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

export const StyledMenuMainArrayEmpty = styled.div`
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
