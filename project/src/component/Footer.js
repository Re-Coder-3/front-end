import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  height: 7vw;
  border-top: solid 1px #747474;
`

const FootText = styled.div`
  font-size: 1.4vw;
  color: grey;
`

const Footer = () => {
    return (
        <Foot>
            로고 <FootText>회사소개 이용안내 개인정보처리방침 Q/A 고객센터 신고하기</FootText>
        </Foot>
    );
}

// 푸터. 홈페이지의 맨 밑에 들어가는 부분입니다.

export default Footer;