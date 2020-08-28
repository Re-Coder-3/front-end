import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import UploadBtn from "../component/UploadBtn";
import ReviewBtn from "../component/ReviewBtn";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px 0 0 0;
`;

const ClassificationBox = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  display: flex;
  align-items: center;
  font-size: 28px;
  & > div:not(:last-child) {
    margin-right: 20px;
  }
  & > div {
  }
`;

const Text = styled.div`
  font-size: ${(props) => (props.type ? "28px" : "24px")};
  font-weight: ${(props) => (props.type ? "bold" : "normal")};
  transition: all 0.1s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CHECK_USER = gql`
  query {
    checkUser
  }
`;

const Search = () => {
  const [type, setType] = useState("all");

  const onClick = (e) => {
    setType(e.target.id);
  };

  return (
    <Container>
      <ClassificationBox>
        <Text id={"all"} type={type === "all"} onClick={onClick}>
          전체
        </Text>
        <Text id={"location"} type={type === "location"} onClick={onClick}>
          지역
        </Text>
        <Text id={"field"} type={type === "field"} onClick={onClick}>
          분야
        </Text>
      </ClassificationBox>
      <ContentWrapper>
        <UploadBtn></UploadBtn>
        <ReviewBtn></ReviewBtn>
      </ContentWrapper>
    </Container>
  );
};

export default Search;
