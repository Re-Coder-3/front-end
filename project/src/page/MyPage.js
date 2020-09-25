import React from "react";
import styled from "styled-components";
import TestImg from "../img/test1.jpeg";
import { HeartIcon } from "../component/Icons";
import { ShareIcon } from "../component/Icons";
import { FilledHeart } from "../component/Icons";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

//상단 부분
const Up = styled.div`
  width: 100%;
  overflow: hidden;
`;

//옅은 회색 프로필 박스
const Profile = styled.div`
  width: 80%;
  margin: 10%;
  border: 0;
  background: #fafafa;
  border-radius: 20px;
`;

//프로필 이름, 분야
const Box1 = styled.div`
  width: 35%;
  margin-top: 5%;
  margin-left: 2%;
  padding: 0;
  border: 0;
  float: left;
`;

//좋아요,공유,신고 버튼 부분
const Box2 = styled.div`
  margin-top: 2%;
  border: 0;
  width: 25%;
  float: right;
`;

//프로필 설명
const Box3 = styled.div`
  width: 80%;
  margin-left: 10%;

  border: 0;
`;

//프로필 이미지
const ProfileImg = styled.div`
  margin: 3%;
  width: 10%;
  border: 0;
  border-radius: 50%;
  float: left;
`;

//프로필 이름
const ProfileName = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;

//프로필 분야
const ProfileField = styled.h1`
  margin-top: 5%;
  border: 0;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #1d1d1d;
`;

//프로필 소개
const ProfileIntroduction = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 29px;
  color: #4a4a4a;
  padding-top: 23%;
`;

const Button = styled.button`
  margin: 2%;
  border: 0;
  background: none;
  font-size: 0.8rem;
  font-style: bold;
`;

//밑부분
const Content = styled.div`
  position: absolute;
  margin: 0% 10% 10% 10%;
  width: 80%;
  height: 50%;
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
    border-bottom: 4px solid;
    border-image: linear-gradient(
        311.48deg,
        #ffe143 -3.24%,
        rgba(255, 255, 255, 0) 78.93%
      ),
      #f04e44;
    border-image-slice: 1;
    background-color: #ffffff;
    font-style: normal;
  }
  .active {
    background-color: #4caf50;
  }
`;

const MyPage = () => {
  const [liked, setLiked] = React.useState(false);
  const onClick = () => {
    {
      liked ? setLiked(false) : setLiked(true);
      console.log(liked);
    }
  };
  const like_idx = 1247;

  const GET_PROFILE = gql`
    query {
      meProfile {
        data {
          profile_idx
          user_idx
          user_name
          user_location
          user_education
          user_profile_img
          user_like_category_idx
          user_career
        }
      }
    }
  `;

  const { userInfo } = useQuery(GET_PROFILE);

  return (
    <div>
      <Up>
        <Profile>
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
          <Box1>
            {/* <ProfileName>{t.user_name}</ProfileName> */}
            <ProfileField>뷰티, 헤어 디자이너</ProfileField>
          </Box1>

          <Box2>
            <Button onClick={onClick}>
              {liked ? <FilledHeart /> : <HeartIcon />}
              {like_idx}
            </Button>
            <Button>
              <ShareIcon /> 공유
            </Button>
            <Button style={{ color: "#9e9e9e" }}>신고</Button>
          </Box2>

          <Box3>
            <ProfileIntroduction>
              100% 책임시술!!!, 홍대입구역 9번 출구 도보 5분 거리
              <br />
              저렴하게 커트, 염색, 펌 하세요~~ 소정의 약값이 발생할 수 있습니다.
              <br />
              코로나 매일매일 소독완료!
            </ProfileIntroduction>
          </Box3>
        </Profile>
      </Up>

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
      <div></div>
    </div>
  );
};

export default MyPage;
