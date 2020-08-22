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

const SearchPost = () => {
    return (
        <Post>
            <Content>사진 사람이름 태그 제목 지역 분야 필수조건 글내용미리보기</Content><ImgWrapper><Image src={testimg} /></ImgWrapper>
        </Post>
    );
};

export default SearchPost;