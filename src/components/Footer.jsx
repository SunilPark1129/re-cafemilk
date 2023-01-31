/*
Component: Footer

Developer: Sunil Park
*/

import React from "react";
import styled from "styled-components";
import { StyledContainer } from "./styles/Container.styled";
import logo from "../assets/logo.png";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  padding-top: 3rem;
  gap: 3rem;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.light};
  }

  p {
    color: ${({ theme }) => theme.colors.mild};
  }
`;

const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
`;

const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  &:nth-of-type(1) {
    flex: 1 1 50%;
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    flex: 0 0 20%;
  }
  address {
    color: ${({ theme }) => theme.colors.mild};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    &:nth-of-type(1) {
      flex: 1 1 100%;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      flex: 1 0 30%;
    }
  }
`;

const StyledFooterHeader = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterSection>
          <StyledFooterHeader>
            <img src={logo} alt="logo" />
            <h3>Cafe Milk</h3>
          </StyledFooterHeader>
          <p>
            Cafe Milk always strives to satisfy customers by using only
            high-quality ingredients to provide only good drinks. We serve
            coffee, tea and smoothies and treat you with friendly manners. We
            look forward to your visit.
          </p>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterHeader>
            <h3>Service</h3>
          </StyledFooterHeader>
          <p>Table inside</p>
          <p>USB Charging available</p>
          <p>Parking lot is provided</p>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterHeader>
            <h3>Contact</h3>
          </StyledFooterHeader>
          <address>
            Rt-70 at South Washington Ave, Cherry Hill, NJ 08002
          </address>
          <p>609) 223-4532</p>
        </StyledFooterSection>
      </StyledFooterContainer>
      <p>© COPYRIGHT CAFE MILK CHERRY HILL NJ - 2021</p>
    </StyledFooter>
  );
};

export default Footer;
