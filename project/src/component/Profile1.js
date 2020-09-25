import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { questionMark } from "../component/Icons";

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
  height: 15%;
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

const H2 = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 41px;
  text-align: center;
  color: #363636;
`;

const H3 = styled.h1`
  font-style: normal;
  font-size: 1.3rem;
  line-height: 20px;
  text-align: center;
  color: #363636;
`;

const CategoryCircle = styled.div`
  background-color: white;
  height: 8vw;
  width: 8vw;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1%;
  }
  border-radius: 100%;
  font-size: 1vw;
`;

const CategoryImage = styled.img`
  height: 80%;
  width: 80%;
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
                key={t.category_idx}
                onClick={onClick}
              >
                <CategoryCircle>
                  <CategoryImage
                    id={t.category_name}
                    key={t.category_idx}
                    src={t.image.image_url}
                  />
                </CategoryCircle>{" "}
                <H3>{t.category_name}</H3>
              </SelectButton>
            ))}
        </ButtonDiv>

        <CommentDiv>
          <H2>
            하나 이상의{" "}
            <p style={{ display: "inline", color: "#F04E44" }}>관심분야</p>를
            선택해 주세요.{" "}
          </H2>
          <H2>적합한 컨텐츠를 추천해 드리는 데 도움이 됩니다!</H2>
        </CommentDiv>
      </Content>
    </div>
  );
};

export default Profile1;
