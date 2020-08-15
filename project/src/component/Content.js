import React from "react";
import styled from "styled-components";
import imgimgimg from "../img/test3.jpeg";

const ContentBox = styled.div`
  width: 13vw;
  height: 13vw;
  background-image: url(${props => props.img || imgimgimg});
  background-size: cover;
  &:not(:last-child) {
    margin-right: 3%;
  }
  display: inline-block;
  border-radius: 5%;
`
const TextOverTitle = styled.div`
  color: white;
  position: relative;
  top:65%;
  left: 10%;
  font-size: 1.5vw;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
`
const TextOverTag = styled.div`
  color: white;
  position: relative;
  top:70%;
  left: 10%;
  font-size: 1.1vw;
  overflow: hidden;
`

const Content = ({title, tags, img}) => {
    return (
        <ContentBox>
            <TextOverTitle>{title}</TextOverTitle>
            <TextOverTag>{tags}</TextOverTag>
        </ContentBox>
    );
}

// 메인화면 중간에 들어가는 콘텐츠 하나하나.

export default Content;