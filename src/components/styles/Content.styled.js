import styled from "styled-components";

export const StyledMenuContent = styled.section`
  display: flex;
  position: relative;
  min-height: 20rem;
  align-items: center;
  padding: 6rem;
  border: 2px solid ${({ theme }) => theme.colors.mild};
  margin-top: 1.5em;
  border-radius: 8px;
  background-color: #fff;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    min-height: 14rem;
  }
`;

export const StyledMenuContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  flex: 1 1 80%;

  h3 {
    font-size: 1.6em;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mild};
  }

  span {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.mild};
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    color: white;
  }

  > p {
    padding: 0.5em 1em;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 8rem;
    margin-left: auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0;
    h3 {
      border-bottom: none;
    }
    > p {
      padding: 0.5rem 0;
      padding-right: 0.3rem;
    }

    > div {
      margin-left: 0;
      margin-top: 5px;
    }
  }
`;

export const StyledMenuContentImageBox = styled.div`
  outline: 2px solid ${({ theme }) => theme.colors.mild};
  position: relative;
  border-radius: 1rem;
  height: 10rem;
  min-width: 10rem;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.light} 10%,
      #b1a5a5 90%
    );
    border-radius: 1rem;
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-radius: 0rem;
    min-width: 8rem;
    height: 8rem;
  }
`;

export const StyledMenuContentClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;

    width: 0%;
    height: 0%;
    transition-property: width, height;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    background-color: ${({ theme }) => theme.colors.main};
  }

  &:hover > div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    right: 0.5rem;
    top: 0.5rem;
  }
`;
