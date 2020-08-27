import React from "react";
import styled from "styled-components";
import testimg from "../img/test1.jpeg"

const Post = styled.div`
  background-color: #F2F2F2;
   display: flex;
   border-radius: 0.5vw;
   height: 15vw;
   Width: 100%;
   margin-top: 3vw;
   margin-bottom: 3vw;
`
const Content = styled.div`
  width:65%;
  padding: 1vw 2vw;
  display: grid;
  grid-template-rows:2fr 1.5fr 1fr 4.5fr;
  grid-template-columns:1fr 5fr;
  grid-template-areas:
  "profile Title"
  "profile Tags"
  "profile Etc"
  "ContentText ContentText";
`
const ImgWrapper = styled.div`
  background-color: #333aaa;
  border-radius: 0.5vw;
  width:35%;
  overflow: hidden;
`

const Image = styled.img`
  max-width: 100%;
`
const Profile = styled.div`
  grid-area: profile;
  text-align: center;
`
const Name = styled.div`
  padding:5%;
  font-size: 1vw;
`
const Title = styled.div`
  grid-area: Title;
  font-size: 1.5vw;
`
const Tags = styled.div`
  grid-area: Tags;
  font-size: 1.3vw;
`
const Etc = styled.div`
  grid-area: Etc;
  font-size: 1vw;
`
const ContentText = styled.div`
  grid-area: ContentText;
  font-size: 1vw;
`
const ProfileImgWrapper = styled.div`
overflow: hidden;
border-radius: 100%;
width: 70%;
height: 70%;
border: solid 1px black;
margin: 0 auto;
`

const SearchPost = () => {
    return (
        <Post>
            <Content>
                <Profile><ProfileImgWrapper><Image src={testimg} /></ProfileImgWrapper> <Name>사람이름</Name></Profile>
                <Title>제목</Title>
                <Tags>태그</Tags>
                <Etc>지역 분야 필수조건</Etc>
                <ContentText>글내용미리보기</ContentText>
            </Content>
            <ImgWrapper><Image src={testimg} /></ImgWrapper>
        </Post>
    );
};

export default SearchPost;