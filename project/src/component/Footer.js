import React from "react";
import styled from "styled-components";
import {TitleLogo} from "./Icons";

const Foot = styled.div`
  height: 7vw;
  border-top: solid 1px #747474;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const FootText = styled.div`
  font-size: 1.4vw;
  color: grey;
`
const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
   display: flex;
  align-items: center;
`

const Footer = () => {
    return (
        <Foot>
            <Logo><TitleLogo/>  커리어스팟</Logo><FootText>회사소개 이용안내 개인정보처리방침 Q/A 고객센터 신고하기</FootText>
        </Foot>
    );
}

// 푸터. 홈페이지의 맨 밑에 들어가는 부분입니다.

export default Footer;