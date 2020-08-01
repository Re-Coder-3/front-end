import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  height: 259px;
  width: 262px;
  background-color: blue;
  display: inline-block;
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