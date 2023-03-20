import styled from "styled-components";
import { StyledWrapper } from "./Wrapper.styled";

export const StyledNavbar = styled.nav`
  box-shadow: 0px 10px 5px -5px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.light};
  z-index: 999;
  img {
    width: 5em;
  }
`;

export const StyledNavbarWrapper = styled(StyledWrapper)`
  display: flex;
  height: 6em;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;

export const StyledNavbarLink = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    font-size: 1.1em;
    font-weight: bold;

    a {
      &.isActived {
        color: ${({ theme }) => theme.colors.main};
      }
    }

    &:hover a {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const StyledNavbarLocation = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
