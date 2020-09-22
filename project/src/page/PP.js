import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slide1 from "../img/Slide1.png";
import Slide2 from "../img/Slide2.png";
import Slide3 from "../img/Slide3.png";
import profile3Img from "../img/profile3.png";
import Profile1 from "../component/Profile1";
import Profile2 from "../component/Profile2";
import Profile3 from "../component/Profile3";
import { FaArrowRight } from "react-icons/fa";

//가장 밖(1)
const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;
//2
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
//3 Slide
const SlideBox = styled.div`
  width: 100%;
  height: 100vh;
  &:nth-child(1) {
    background: url(${Slide2}) no-repeat;
    background-size: cover;
  }
  &:nth-child(2) {
    background: url(${Slide3}) no-repeat;
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(${profile3Img}) no-repeat;
    background-size: cover;
  }
`;
//5 Slide later/next button
const Scroll = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% 0;
  right: 0;
`;

//다음단계
const NextButton = styled.button`
  border: 0px;
  width: 100%;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 41px;
  color: #676767;
  background-color: red;
`;

//다음에 하기
const LaterButton = styled.button`
  width: 100%;
  border: 0px;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 41px;
  color: #999999;
`;

const Profile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    console.log(currentSlide);
    if (currentSlide >= 4) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Wrapper>
      <Container ref={slideRef}>
        <SlideBox>
          <Profile1></Profile1>
          <Scroll>
            <NextButton onClick={nextSlide}>a</NextButton>
            <LaterButton>b</LaterButton>
          </Scroll>
        </SlideBox>

        <SlideBox>
          <Profile2></Profile2>
          <Scroll>
            <NextButton onClick={nextSlide}>a</NextButton>
            <LaterButton>b</LaterButton>
          </Scroll>
        </SlideBox>

        <SlideBox>
          <Profile3></Profile3>
          <Scroll>
            <NextButton>a</NextButton>
            <LaterButton>b</LaterButton>
          </Scroll>
        </SlideBox>
      </Container>
    </Wrapper>
  );
};

export default Profile;
