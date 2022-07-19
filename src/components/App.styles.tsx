import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  .logo-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;

    @media only screen and (max-width: 768px) {
      padding: 40px;
    }
  }
  .calendar-container {
    display: flex;
  }

  .calendar p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 109%;
    color: #ffffff;
    margin-left: 12px;
  }
  .calendar p:nth-child(2) {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-top: 3px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .star-left {
    position: absolute;
    top: 4%;
    left: 4%;
  }
  .star-right {
    position: absolute;
    top: 4%;
    right: 4%;

    @media only screen and (max-width: 768px) {
      top: -1%;
      right: 0%;
    }
  }
  .star-bottom {
    position: absolute;
    top: 18.6%;
    right: 33.7%;

    @media only screen and (max-width: 768px) {
      top: 24%;
      right: 8.7%;
    }
  }
  .star-b-right {
    position: absolute;
    bottom: 8.6%;
    left: 27.2%;
  }
  .star-b-left {
    position: absolute;
    bottom: 9.6%;
    left: 28.5%;
  }

  .header-container {
    animation: slideInFromBottom 1s;
    animation-delay: 0.3s;
  }

  .header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 91%;
    text-align: center;
    letter-spacing: -0.015em;
    color: #ffffff;

    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      display: inline-block;
      font-size: 40px;
    }
  }

  .unlock {
    font-family: "Inter";
    font-weight: 300;
    font-size: 65px;
    color: #ffffff;
    line-height: 91%;
    @media only screen and (max-width: 768px) {
      font-size: 40px;
    }
  }

  .chance {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 29.4318px;
    line-height: 141.5%;
    text-align: center;
    letter-spacing: -0.06em;
    color: #ffffff;
    margin: 25px 0;
    display: flex;
    flex-direction: column;

    animation: slideInFromBottom 1s;
    animation-delay: 0.4s;

    @media only screen and (max-width: 768px) {
      display: inline-block;
      font-size: 15px;
      width: 60%;
    }
  }

  .box {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.39) -213.5%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
      inset 0px 2px 0px rgba(255, 255, 255, 0.24);
    border-radius: 8px;
    width: 425px;
    height: 257px;
    padding: 24px 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: slideInFromBottomShort 1s;
    animation-delay: 0s;

    @media only screen and (max-width: 768px) {
      width: 90%;
      height: fit-content;
    }
  }

  .play {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #ffffff;
  }

  .guess {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .hero {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: #fff;
    padding: 15px;
    display: flex;
    align-items: flex-start;
  }
  .hero-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-left: 3px;
  }

  .btn-container {
    position: relative;
    animation: slideInFromBottomShort 1s;
    animation-delay: 0s;
  }

  .btn {
    outline: none;
    border: none;
    cursor: pointer;
    margin: 40px 0;
    background: #ecab03;
    color: #fff;
    border-radius: 4px;
    padding: 7px 26px;
    width: 225px;
    height: 56px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    margin-left: 20px;
  }

  .image {
    position: absolute;
    bottom: 0;
    left: 30%;
    width: 40%;
    object-fit: cover;
    animation: slideInFromBottomShort 1s;
    animation-delay: 0s;
  }

  .image-left {
    position: absolute;
    bottom: 20%;
    left: 30%;
    width: 12%;
    height: 12%;
    object-fit: cover;
    animation: bounce 1.6s alternate infinite;
    animation-delay: 0.1s;
    @media only screen and (max-width: 768px) {
      left: -27%;
      bottom: 10%;
      width: 50%;
      height: 18%;
    }
  }
  .image-right {
    position: absolute;
    bottom: 15%;
    right: 26%;
    width: 10%;
    height: 10%;
    object-fit: cover;
    animation: bounce 1.6s alternate infinite;
    animation-delay: 0.1s;

    @media only screen and (max-width: 768px) {
      right: -19%;
      bottom: 10%;
      width: 30%;
      height: 15%;
    }
  }

  .common {
    border-top: 480px solid yellow;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    opacity: 0.13;
    position: absolute;
    background: linear-gradient(
      1.87deg,
      rgba(255, 229, 0, 0.5) -1.18%,
      rgba(255, 230, 9, 0.435) 3.33%,
      rgba(255, 231, 23, 0.335) 10.55%,
      rgba(255, 233, 36, 0.245) 17.77%,
      rgba(255, 234, 47, 0.17) 25.89%,
      rgba(255, 234, 56, 0.11) 34.01%,
      rgba(255, 235, 62, 0.06) 42.13%,
      rgba(255, 236, 67, 0.025) 51.15%,
      rgba(255, 236, 70, 0.005) 60.17%,
      rgba(255, 236, 71, 0) 71.89%
    );
  }

  .ribbon1 {
    width: 121.14px;
    height: 920.67px;
    left: 260px;
    bottom: -10%;
    transform: matrix(-0.59, 0.81, 0.81, 0.59, 0, 0);
  }
  .ribbon2 {
    width: 149.81px;
    height: 990.67px;
    left: 578px;
    bottom: -50%;
    transform: matrix(-0.86, 0.52, 0.52, 0.86, 0, 0);
  }
  .ribbon3 {
    width: 158px;
    height: 51px;
    left: 643px;
    bottom: 0;
  }
  .ribbon4 {
    width: 140.81px;
    height: 120.67px;
    right: 440px;
    bottom: 0%;
    transform: rotate(31.12deg);
  }
  .ribbon5 {
    width: 140.14px;
    height: 14.46px;
    right: 260px;
    transform: scaleX(-1);
    bottom: -10%;
    background: linear-gradient(
      1.87deg,
      rgba(255, 229, 0, 0.5) -1.18%,
      rgba(255, 230, 9, 0.435) 3.33%,
      rgba(255, 231, 23, 0.335) 10.55%,
      rgba(255, 233, 36, 0.245) 17.77%,
      rgba(255, 234, 47, 0.17) 25.89%,
      rgba(255, 234, 56, 0.11) 34.01%,
      rgba(255, 235, 62, 0.06) 42.13%,
      rgba(255, 236, 67, 0.025) 51.15%,
      rgba(255, 236, 70, 0.005) 60.17%,
      rgba(255, 236, 71, 0) 71.89%
    );
    transform: rotate(53.78deg);
  }

  .rib {
    /* transform-origin: center 33%; */
    /* position: absolute; */
    /* bottom: 0%;
    right: 10%; */
    /* animation: rotation 5s infinite linear; */
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
    /* 100% {
      transform: rotate(360deg);
    } */
  }
  @keyframes bounce {
    0% {
      transform: translatey(0);
    }
    100% {
      transform: translatey(-10em);
    }
  }

  @keyframes slideInFromBottomShort {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    50% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default AppWrapper;
