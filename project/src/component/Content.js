import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 18vw;
  height: 18vw;
  background-color: blue;
  &:not(:last-child) {
    margin-right: 1.5%;
  }
  display: inline-block;
  border-radius: 5%;
`

const Content = ({title, tags}) => {
    return (
        <ContentBox>
            <div>{title}</div>
            <div>{tags}</div>
        </ContentBox>
    );
}

// 메인화면 중간에 들어가는 콘텐츠 하나하나.

export default Content;