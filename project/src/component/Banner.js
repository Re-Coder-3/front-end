import React from "react";
import Category from "./Category";
import styled from "styled-components";
import banner from "../img/banner.png";

const WholeBanner = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 509px;
  position: relative;
`
const CategoryCircles = styled.div`
  position: absolute;
  top: 382px;
  left: 165px;
`
const TextBox = styled.div`
  position: absolute;
  top: 67px;
  left: 163px;
  color: white;
`

const Banner = () => {
    const currentArticle = 363
    //실제 글 갯수를 서버에서 받아오기 전 임시로 사용할 변수. 구현하고 나면 지우자.

    return (
        <WholeBanner>
            <TextBox>
                
            </TextBox>
            <CategoryCircles>
                <Category text="카테고리1" />
                <Category text="카테고리2" />
                <Category text="카테고리3" />
                <Category text="카테고리4" />
                <Category text="카테고리5" />
            </CategoryCircles>
        </WholeBanner>
    );
}

// 헤더 밑, 큰 이미지와 함께 카테고리도 들어간다.

export default Banner;