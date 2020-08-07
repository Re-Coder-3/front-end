import React from "react";
import styled from "styled-components";

const CategoryCircle = styled.div`
  background-color: gray;
  height: 6vw;
  width: 6vw;
  display: inline-block;
  margin-right: 1%;
  border-radius: 100%;
`

const Category = ({text}) => {
    return (
        <CategoryCircle>
            {text}
        </CategoryCircle>
    );
}

// 카테고리 한개
// 나중에 이미지 주소 넣는 부분 구현하기

export default Category;