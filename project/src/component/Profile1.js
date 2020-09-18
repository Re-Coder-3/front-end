import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Content = styled.div`
  width: 85%;
  height: 100%;
  float: left;
`;

const HeaderDiv = styled.div`
  padding-top: 6%;
  padding-left: 35%;
`;

const ButtonDiv = styled.div`
  padding-left: 20%;
  padding-top: 4%;
`;

const SelectButton = styled.button`
  margin: 3%;
  width: 13%;
  height: 13%;
  color: black;
  background-color: white;
  font-size: 15px;
  border: 0px;
  border-radius: 20px;
`;

const CommentDiv = styled.div`
  margin-top: 4%;
  margin-left: 15%;
`;

const H1 = styled.h1`
  font-family: Kohinoor Gujarati;
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;
  line-height: 72px;
  color: #353535;
`;

const H21 = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 41px;
  text-align: center;
  color: #363636;
`;

const Scroll = styled.div`
  width: 15%;
  height: 100%;
  float: right;
`;

//다음단계
const NextButton = styled.button`
  border: 0px;
  width: 100%;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 41px;
  color: #676767;
`;

//다음에 하기
const LaterButton = styled.button`
  width: 100%;
  margin-top: 30%;
  margin-bottom: 200%;
  border: 0px;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 41px;
  color: #999999;
`;

const CATEGORY_QUERY = gql`
  query {
    findCategory {
      count
      rows {
        category_name
        category_idx
        image {
          image_url
        }
      }
    }
  }
`;

const Profile1 = () => {
  const category = [];

  const onClick = (e) => {
    e.preventDefault();
    e.target.property = !e.target.property;
    {
      if (e.target.property === true) {
        e.target.style.color = "#F04E44";
        if (category.includes(e.target.id) === false)
          category.push(e.target.id);
      } else {
        e.target.style.color = "#000000";
        if (category.includes(e.target.id) === true)
          category.splice(category.indexOf(e.target.id), 1);
      }
    }
    console.log(category);
  };

  const { data } = useQuery(CATEGORY_QUERY);

  return (
    <div>
      <Content>
        <HeaderDiv>
          <H1>간단한 프로필 작성하고 가세요! 🤗 </H1>
        </HeaderDiv>

        <ButtonDiv>
          {data &&
            data.findCategory.rows.map((t) => (
              <SelectButton
                id={t.category_name}
                image={t.image.image_url}
                onClick={onClick}
              >
                {t.category_name}
              </SelectButton>
            ))}
        </ButtonDiv>

        {/* 
        <ButtonDiv>
          <SelectButton
            id="beauty"
            value="beauty"
            property="false"
            onClick={onClick}
          >
            <FaApple size="1x"></FaApple>패션&뷰티
          </SelectButton>

          <SelectButton
            id="education"
            value="education"
            property="false"
            onClick={onClick}
          >
            <FaApple size="1x" />
            교육
          </SelectButton>

          <SelectButton
            id="shot"
            value="shot"
            property="false"
            onClick={onClick}
          >
            <FaApple size="1x" />
            촬영
          </SelectButton>

          <SelectButton
            id="medical"
            value="medical"
            property="false"
            onClick={onClick}
          >
            <FaApple size="1x" />
            의료
          </SelectButton>

          <SelectButton id="etc" value="etc" property="false" onClick={onClick}>
            <FaApple size="1x" />
            기타
          </SelectButton>
        </ButtonDiv>
*/}
        <CommentDiv>
          <H21>
            하나 이상의{" "}
            <p style={{ display: "inline", color: "#F04E44" }}>관심분야</p>를
            선택해 주세요.{" "}
          </H21>
          <H21>적합한 컨텐츠를 추천해 드리는 데 도움이 됩니다!</H21>
        </CommentDiv>
      </Content>
      <Scroll>
        <Link to="/">
          <LaterButton> 다음에 하기</LaterButton>
        </Link>
        <NextButton onClick>
          <FaArrowRight size="50px" /> <br />
          다음 단계
        </NextButton>
      </Scroll>
    </div>
  );
};

export default Profile1;
