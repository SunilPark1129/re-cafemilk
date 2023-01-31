import styled from "styled-components";
import logo from "../../assets/logo.png";

export const StyledRewards = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StyledRewardsHeader = styled.header`
  z-index: -1;
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const StyledRewardsMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StyledRewardsMainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.mild};

  h1 {
    margin: auto;
    border-bottom: 2px solid ${({ theme }) => theme.colors.main};
    font-size: 1.2em;
  }

  span {
    color: red;
  }
`;

export const StyledRewardsMainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
  width: 100%;
`;

export const StyledRewardsMainImage = styled.img`
  max-width: 70rem;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: 50% 20%;
  margin: auto;
`;

export const StyledRewardsCouponImageBox = styled.div`
  display: flex;
  align-items: center;
  margin: 2em 0;

  img {
    height: 8em;
  }

  > p {
    font-size: 3em;
  }

  &:nth-of-type(3) {
    > div > div {
      transform: rotateY(25deg);
    }
  }
`;

export const StyledRewardsCouponPerspective = styled.div`
  perspective: 900px;
`;

export const StyledRewardsCoupon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.main};
  width: 14em;
  padding: 1rem 0.5em;
  position: relative;
  box-shadow: 5px 5px 10px -3px ${({ theme }) => theme.colors.shadow};
  transform: rotateY(-25deg);
  height: 9em;
  justify-content: center;

  h4 {
    font-size: 0.8em;
    text-align: center;
  }

  p {
    font-size: 0.6em;
    text-align: center;
    color: ${({ theme }) => theme.colors.shadow};
  }

  > span {
    border: 1px solid ${({ theme }) => theme.colors.light};
    position: absolute;
    left: 0.5em;
    right: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
  }

  > div {
    padding: 0.5em 0;
    justify-content: center;
    display: grid;
    grid-template-rows: 2em 2em;
    grid-template-columns: repeat(5, 2em);
    gap: 0.5em;

    span {
      content: "";
      background-color: ${({ theme }) => theme.colors.light};
      border-radius: 50%;
      flex: 0 0 15%;
      padding-bottom: 15%;
      position: relative;

      &.logo {
        background-image: url(${logo});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
