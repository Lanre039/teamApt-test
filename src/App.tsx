import React from "react";
import "styles/globals.css";
import {
  Logo,
  Calendar,
  GreaterThanIcon,
  StarGreen,
  StarWhite,
  StarPurple,
} from "components/SvgPack";
import Coinpot1x from "assets/coinpot.png";
import Coinpot2x from "assets/coinpot@2x.png";
import CoinLeft from "assets/coinleft.png";
import CoinRight from "assets/coinright.png";
import AppWrapper from "components/App.styles";

function App() {
  return (
    <div className="main">
      <AppWrapper>
        <div className="logo-section">
          <Logo />
          <div className="calendar-container">
            <Calendar />
            <div className="calendar">
              <p>Day 1</p>
              <p>of 5</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="star-left">
            <StarGreen />
          </div>
          <div className="star-right">
            <StarWhite />
          </div>
          <div className="star-bottom">
            <StarPurple />
          </div>
          <div className="header-container">
            <h2 className="header">
              <span className="unlock">Unlock to</span>
              <span> Power your dreams!</span>
            </h2>
          </div>
          <h3 className="chance">
            <span>Stand a chance to win </span>
            <span>
              <strong>N3,000,000</strong> everyday for the next 5 days
            </span>
          </h3>
          <div className="box">
            <p className="play">🚀 How To Play</p>
            <div>
              <p className="guess">
                1. Guess the right combination of numbers{" "}
              </p>
              <p className="guess">
                2. Win <strong>N3,000,000</strong> instantly{" "}
              </p>
              <p className="guess my-1">
                Sounds unbelievable? Well, guess right & see for yourself!
              </p>
            </div>
            <div className="hero">
              <p>💡</p>
              <p className="hero-text">
                Think well before you guess. You have only 2 attempts per day
                and even after you wi, you can come back the next day to try for
                another jackpot!
              </p>
            </div>
          </div>
          <div className="star-b-right">
            <StarWhite />
          </div>
          <div className="btn-container">
            <button className="btn">
              <span className="btn-text">Play The Game</span>
              <span>
                <GreaterThanIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="star-b-left">
          <StarPurple />
        </div>
        <div>
          <img src={CoinLeft} alt="Coinpot logo" className="image-left" />
          <img src={CoinRight} alt="Coinpot logo" className="image-right" />
          <img
            srcSet={`${Coinpot1x} 1x, ${Coinpot2x} 2x`}
            alt="Coinpot logo"
            className="image"
          />
        </div>
        {/* <div className="rib">
          <div className="common ribbon1"></div>
          <div className="common ribbon2"></div>
          <div className="common ribbon3"></div>
          <div className="common ribbon4"></div>
          <div className="common ribbon5"></div>
        </div> */}
      </AppWrapper>
    </div>
  );
}

export default App;
