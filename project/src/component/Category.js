import React from "react";
import styled from "styled-components";

const CategoryCircle = styled.div`
  background-color: gray;
  height: 88px;
  width: 88px;
  display: inline-block;
  margin-right: 24px;
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