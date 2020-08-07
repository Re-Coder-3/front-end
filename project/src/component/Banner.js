import React from "react";
import Category from "./Category";
import styled from "styled-components";
import banner from "../img/banner.png";

const WholeBanner = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height:30vw;
  padding-top: 5%;
  padding-left: 10%;
`
const CategoryCircles = styled.div`
  margin-top: 6%;
  height: 5vw;
  background-color: orange;
`
const TextBox = styled.div`
  color: white;
  font-size: 2vw;
  line-height: 3vw;
`
const BoldText = styled.div`
  font-weight: bold;
  font-size: 3vw;
  line-height: 4vw;
`
const NumberText = styled.span`
  font-weight: bold;
  text-decoration: underline;
`

const Banner = () => {
    const currentArticle = 363
    //실제 글 갯수를 서버에서 받아오기 전 임시로 사용할 변수. 구현하고 나면 지우자.

    return (
        <WholeBanner>
            <TextBox>
                <BoldText>
                    커리어스팟은~~~<br/>
                    지금 하고 있습니다
                </BoldText>
                <br/>
                기타 내용 등 아무내용 넣기<br/>
                <NumberText>{currentArticle}개</NumberText> 글이 있습니다
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