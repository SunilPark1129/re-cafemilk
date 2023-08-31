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
  StyledRewardsArticle,
  StyledRewardsArticleContent,
  StyledRewardsArticleTextBox,
  StyledRewardsArticleImage,
  StyledRewardsCouponPerspective,
  StyledRewardsCoupon,
  StyledRewardsCouponImageBox,
} from "../../components/styles/Rewards.styled";
import headerImg from "../../assets/rewards_thanks.jpg";
import birthdayImg from "../../assets/rewards_birthday.jpg";
import groupImg from "../../assets/rewards_group.jpg";

const Rewards = () => {
  window.scrollTo(0, 0);
  return (
    <StyledRewards>
      <StyledRewardsHeader>
        <img src={headerImg} alt="three women are smiling" />
        <h1>THANK YOU</h1>
        <StyledRewardsArticleTextBox>
          <p>
            Thank you for visiting our cafe. For you, our cafe has prepared a
            small gift. Check out what gifts we have now.
          </p>
          <p>
            <span>*Some events may have an expiration date*</span>
          </p>
        </StyledRewardsArticleTextBox>
      </StyledRewardsHeader>
      <StyledRewardsArticle>
        <StyledRewardsArticleContent>
          <h2>STAMP CARD</h2>
          <StyledRewardsCouponImageBox>
            <img src={icedOrange} alt="icedOrange" />
            <p>&#10137;</p>
            <StyledRewardsCouponPerspective>
              <StyledRewardsCoupon>
                <p className="card-title">CAFEMILK STAMP CARD</p>
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
                <p className="card-address">
                  Rt-70 at South Washington Ave, Cherry Hill, NJ
                </p>
                <span></span>
              </StyledRewardsCoupon>
            </StyledRewardsCouponPerspective>
          </StyledRewardsCouponImageBox>
          <StyledRewardsArticleTextBox>
            <p>
              When you buy a drink, we will give you a stamp card. Then whenever
              you buy a drink, a stamp will be stamped on the card.
            </p>
          </StyledRewardsArticleTextBox>
          <StyledRewardsCouponImageBox>
            <StyledRewardsCouponPerspective>
              <StyledRewardsCoupon>
                <p className="card-title">CAFEMILK STAMP CARD</p>
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
                <p className="card-address">
                  Rt-70 at South Washington Ave, Cherry Hill, NJ
                </p>
                <span></span>
              </StyledRewardsCoupon>
            </StyledRewardsCouponPerspective>
            <p>&#10137;</p>
            <img src={icedOrange} alt="icedOrange" />
          </StyledRewardsCouponImageBox>
          <StyledRewardsArticleTextBox>
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
          </StyledRewardsArticleTextBox>
        </StyledRewardsArticleContent>
        <StyledRewardsArticleContent>
          <h2>BIRTHDAY</h2>
          <StyledRewardsArticleImage
            src={birthdayImg}
            alt="woman is drinking a coffee"
          />
          <StyledRewardsArticleTextBox>
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
          </StyledRewardsArticleTextBox>
        </StyledRewardsArticleContent>
        <StyledRewardsArticleContent>
          <h2>GROUP</h2>
          <StyledRewardsArticleImage
            src={groupImg}
            alt="people are communicating at the table"
          />
          <StyledRewardsArticleTextBox>
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
          </StyledRewardsArticleTextBox>
        </StyledRewardsArticleContent>
      </StyledRewardsArticle>
    </StyledRewards>
  );
};

export default Rewards;
