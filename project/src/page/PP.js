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
import questionMark from "../component/Icons";
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

const ProButton = styled.button`
  margin-left: 50%;
  padding-top: 3%;
  background: none;
  border: 0px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-decoration-line: underline;
  color: #5b5b5b;
`;

const H3 = styled.h1`
  position: absolute;
  padding-top: 2%;
  margin-left: 35%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #585858;
`;

const Box = styled.div`
  width: 85%;
  height: 20%;
  float: left;
`;

const Scroll = styled.div`
  width: 15%;
  height: 100%;
  float: right;
`;

//다음단계
const NextButton = styled.button`
  border: 0px;
  width: 100%;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 41px;
  color: #676767;
`;

//다음에 하기
const LaterButton = styled.button`
  width: 100%;
  border: 0px;
  margin-top: 30%;
  margin-bottom: 160%;
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

  let check = React.createElement("input", { type: "checkbox", value: false });
  let checkState = check.value;

  return (
    <Wrapper>
      <Container ref={slideRef}>
        <SlideBox>
          <Profile1></Profile1>
          <Scroll>
            <Link to="/">
              <LaterButton>다음에 하기</LaterButton>
            </Link>
            <questionMark>
              지금 선택 안하고 <p />
              넘어가실 건가요?
            </questionMark>
            <NextButton onClick={nextSlide}>
              <FaArrowRight size="50px" /> <br />
              다음 단계
            </NextButton>
          </Scroll>
        </SlideBox>

        <SlideBox>
          <Profile2></Profile2>
          <Scroll>
            <Link to="/">
              <LaterButton>다음에 하기</LaterButton>
            </Link>
            <questionMark>
              지금 입력 안하고 <p />
              넘어가실 건가요?
            </questionMark>
            <Link to="/mypage">
              <NextButton>
                <FaArrowRight size="50px" /> <br />
                완료 하기
              </NextButton>
            </Link>
          </Scroll>
          <Box>
            <ProButton onClick={nextSlide}>혹시 프로세요...?</ProButton>
            <H3>{check}이벤트 등 프로모션 알림 메일 받을래요?</H3>{" "}
          </Box>
        </SlideBox>

        <SlideBox>
          <Profile3></Profile3>
          <Scroll>
            <Link to="/">
              <LaterButton style={{ color: "white" }}>다음에 하기</LaterButton>{" "}
            </Link>
            <questionMark style={{ color: "white" }}>
              지금 입력 안하고 <p />
              넘어가실 건가요?
            </questionMark>
            <Link to="/">
              <NextButton>
                <FaArrowRight size="50px" /> <br />
                완료 하기
              </NextButton>
            </Link>
          </Scroll>
        </SlideBox>
      </Container>
    </Wrapper>
  );
};

export default Profile;
