import React, { useState } from "react";
import styled from "styled-components";
import TestImg from "../img/test1.jpeg";
import Heart from "../img/heart.png";
import Share from "../img/share.png";

//상단 프로필 부분
const Containter = styled.div`
  height: 300px;
  width: 100%;
`;

//옅은 회색 프로필 박스
const Profile = styled.div`
  position: absolute;
  margin: 10%;
  width: 80%;
  height: 300px;
  background: #fafafa;
  border-radius: 20px;
`;

//프로필 이미지, 이름, 분야, 하트/공유/신고 버튼 박스
const ProfileBox1 = styled.div`
  overflow: hidden;
`;

//프로필 이미지
const ProfileImg = styled.div`
  width: 80px;
  height: 80px;
  margin: 3% 0% 0% 3%;
  border-radius: 50%;
  float: left;
`;

const ProfileBox2 = styled.div`
  overflow: hidden;
`;

//프로필 이름
const ProfileName = styled.h1`
  float: left;
  margin: 4% 0% 0% 8%;
  border: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;

//프로필 분야
const ProfileField = styled.h1`
  float: bottom;
  margin: 10% 0% 0% 8%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #1d1d1d;
`;

//프로필 소개
const ProfileIntroduction = styled.h1`
  margin: 3% 0% 0% 10%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #4a4a4a;
`;

//좋아요,공유,신고 버튼 부분
const Additional = styled.div`
  overflow: hidden;
`;

const Likes = styled.button`
  float: left;
  margin: 0% 0% 0% 50%;
  background: url(${Heart}) no-repeat;
  border: 0;
  height: 30px;
  width: 33px;
`;

const Shared = styled.button`
  float: left;
  margin: 0% 0% 0% 60%;
  background: url(${Share}) no-repeat;
  border: 0;
  height: 30px;
  width: 33px;
`;

const Report = styled.button`
  float: left;
  margin: 0% 0% 0% 80%;
  border: 0;
`;

//밑부분
const Content = styled.div`
  position: absolute;
  margin: 15% 10% 10% 10%;
  width: 80%;
  height: 80%;
  border-radius: 20px;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
`;

const Li = styled.li`
  float: left;
  a {
    display: block;
    color: #4e4e4e;
    font-family: Noto Sans KR;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    padding: 14px 16px;
    margin-right: 20px;
    text-decoration: none;
  }
  a:hover:not(.active) {
    font-style: normal;
  }
  .active {
    font-style: bold;
    border-bottom: 5px solid;
    border-image-slice: linear-gradient(
        311.48deg,
        #ffe143 -3.24%,
        rgba(255, 255, 255, 0) 78.93%
      ),
      #f04e44;
    border-image-slice: 1;
  }
`;

const MyPage = () => {
  // 이미지 서버에서 받아와야할 부분

  return (
    <div>
      <Containter>
        <Profile>
          <ProfileBox1>
            <ProfileImg>
              <img
                src={TestImg}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 100,
                  overflow: "hidden" /* 넘친 부분 잘려서 보이지 않음 */,
                }}
              />
            </ProfileImg>
            <Additional>
              {/* <Likes></Likes> 1,247
              <Shared></Shared> 공유 */}
              <img src={Heart} /> 1,247
              <img src={Share} /> 공유
              <Report>신고</Report>
            </Additional>
            <ProfileBox2>
              <ProfileName>우왕좌왕</ProfileName>
              <ProfileField>뷰티, 헤어 디자이너</ProfileField>
            </ProfileBox2>
          </ProfileBox1>
          <ProfileIntroduction>
            100% 책임시술!!!, 홍대입구역 9번 출구 도보 5분 거리
            <br />
            저렴하게 커트, 염색, 펌 하세요~~ 소정의 약값이 발생할 수 있습니다.
            <br />
            코로나 매일매일 소독완료!
          </ProfileIntroduction>
        </Profile>
      </Containter>

      <Content>
        <Ul>
          <Li>
            <a class="gallery" href="#home">
              내 작업물
            </a>
          </Li>
          <Li>
            <a href="#post">내 게시글</a>
          </Li>
          <Li>
            <a href="#review">내가 받은 리뷰</a>
          </Li>
          <Li>
            <a href="#about">내가 쓴 리뷰</a>
          </Li>
          <Li>
            <a href="#likes">좋아요</a>
          </Li>
        </Ul>
      </Content>
    </div>
  );
};

export default MyPage;
