/*
Component: Rewards
Purpose: This is where events are announced.

Developer: Sunil Park
*/

import React from "react";
import icedOrange from "../../assets/tea_iced_orange.png";
import {
  StyledRewards,
  StyledRewardsHeader,
  StyledRewardsMain,
  StyledRewardsMainSection,
  StyledRewardsMainTextBox,
  StyledRewardsMainImage,
  StyledRewardsCouponPerspective,
  StyledRewardsCoupon,
  StyledRewardsCouponImageBox,
} from "../../components/styles/Rewards.styled";
import headerImg from "../../assets/rewards_thanks.jpg";
import birthdayImg from "../../assets/rewards_birthday.jpg";
import groupImg from "../../assets/rewards_group.jpg";

const Rewards = () => {
  return (
    <StyledRewards>
      <StyledRewardsHeader>
        <img src={headerImg} alt="three women are smiling" />
      </StyledRewardsHeader>
      <StyledRewardsMain>
        <StyledRewardsMainSection>
          <h3>THANK YOU</h3>
          <StyledRewardsMainTextBox>
            <p>
              Thank you for visiting our cafe. For you, our cafe has prepared a
              small gift. Check out what gifts we have now.
            </p>
            <p>
              <span>*Some events may have an expiration date*</span>
            </p>
          </StyledRewardsMainTextBox>
        </StyledRewardsMainSection>
        <StyledRewardsMainSection>
          <h3>STAMP CARD</h3>
          <StyledRewardsCouponImageBox>
            <img src={icedOrange} alt="icedOrange" />
            <p>&#10137;</p>
            <StyledRewardsCouponPerspective>
              <StyledRewardsCoupon>
                <h4>CAFEMILK STAMP CARD</h4>
                <div>
                  <span className="logo" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Rt-70 at South Washington Ave, Cherry Hill, NJ</p>
                <span></span>
              </StyledRewardsCoupon>
            </StyledRewardsCouponPerspective>
          </StyledRewardsCouponImageBox>
          <StyledRewardsMainTextBox>
            <p>
              When you buy a drink, we will give you a stamp card. Then whenever
              you buy a drink, a stamp will be stamped on the card.
            </p>
          </StyledRewardsMainTextBox>
          <StyledRewardsCouponImageBox>
            <StyledRewardsCouponPerspective>
              <StyledRewardsCoupon>
                <h4>CAFEMILK STAMP CARD</h4>
                <div>
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                  <span className="logo" />
                </div>
                <p>Rt-70 at South Washington Ave, Cherry Hill, NJ</p>
                <span></span>
              </StyledRewardsCoupon>
            </StyledRewardsCouponPerspective>
            <p>&#10137;</p>
            <img src={icedOrange} alt="icedOrange" />
          </StyledRewardsCouponImageBox>
          <StyledRewardsMainTextBox>
            <p>
              If you collect 10 stamps, you will receive a drink of any size.
              Our stamp card has no expiration date, so you can use it at any
              time. Collect all of our stamps to get a free drink!
            </p>
            <p>
              <span>
                *You cannot get stamps for drinks obtained through events*
              </span>
            </p>
          </StyledRewardsMainTextBox>
        </StyledRewardsMainSection>
        <StyledRewardsMainSection>
          <h3>BIRTHDAY</h3>
          <StyledRewardsMainImage
            src={birthdayImg}
            alt="woman is drinking a coffee"
          />
          <StyledRewardsMainTextBox>
            <p>
              Cafe Milk takes care of our customers' birthdays. Bring a license
              to prove your birthday on the day of your birthday. Once the proof
              is complete, take one of your favorite drinks in any size!
            </p>
            <p>
              <span>
                *Drinks acquired through events are not applied to the stamp
                card*
              </span>
            </p>
          </StyledRewardsMainTextBox>
        </StyledRewardsMainSection>
        <StyledRewardsMainSection>
          <h3>GROUP</h3>
          <StyledRewardsMainImage
            src={groupImg}
            alt="people are communicating at the table"
          />
          <StyledRewardsMainTextBox>
            <p>
              If you come in a group of 5 or more, you get one free drink! 5 or
              more people must visit the cafe and four of them must buy drinks
              to receive this benefit.
            </p>
            <p>
              <span>
                *Drinks acquired through events are not applied to the stamp
                card*
              </span>
            </p>
          </StyledRewardsMainTextBox>
        </StyledRewardsMainSection>
      </StyledRewardsMain>
    </StyledRewards>
  );
};

export default Rewards;
