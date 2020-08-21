import React, { useCallback, useState } from "react";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Content = styled.div`
  width: 85%;
`;

const HeaderDiv = styled.div`
  padding-top: 5%;
  padding-left: 30%;
`;

const ButtonDiv = styled.div`
  padding-left: 15%;
  padding-top: 3%;
`;

const SelectButton = styled.button`
  margin: 2%;
  width: 130px;
  height: 130px;
  color: black;
  background-color: white;
  font-size: 20px;
  border: 0px;
  border-radius: 20px;
`;

const CommentDiv = styled.div`
  margin-top: 7%;
`;

const H1 = styled.h1`
  font-family: Kohinoor Gujarati;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 72px;
  color: #353535;
`;

const H21 = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 41px;
  text-align: center;
  color: #363636;
`;

const Profile1 = () => {
  const [category, setCategory] = useState([]);
  const onClick = (e) => {
    e.preventDefault();
    setCategory([...category, e.target.id]);
    console.log(category);
  };

  const LIKE_CATEGORY = gql`
    mutation categoryUser($category: Array!) {
      categoryUser(category: $category)
    }
  `;
  const [categoryUser, { data }] = useMutation(LIKE_CATEGORY, {
    variables: { category: category },
  });

  const [categoryMutation] = useMutation(LIKE_CATEGORY);

  const NextClick = async (event) => {
    event.preventDefault();
    const result = await categoryUser();
    if (result) {
      const {
        data: {
          categoryUser: { data: token, status, error },
        },
      } = result;
      console.log(token, error, status);
      if (status === 200) {
        categoryMutation({ variables: { token } });
      }
    }
  };

  return (
    <Content>
      <HeaderDiv>
        <H1>간단한 프로필 작성하고 가세요! 🤗 </H1>
      </HeaderDiv>
      <ButtonDiv>
        <SelectButton
          id="beauty"
          value="beauty"
          property="false"
          onClick={onClick}
        >
          <FaApple size="1x" />
          패션&뷰티
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

        <SelectButton id="shot" value="shot" property="false" onClick={onClick}>
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

      <CommentDiv>
        <H21>
          하나 이상의{" "}
          <p style={{ display: "inline", color: "#F04E44" }}>관심분야</p>를
          선택해 주세요.{" "}
        </H21>
        <H21>적합한 컨텐츠를 추천해 드리는 데 도움이 됩니다!</H21>
      </CommentDiv>
    </Content>
  );
};

export default Profile1;
