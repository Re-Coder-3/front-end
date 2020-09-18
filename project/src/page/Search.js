import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";
import MyDropzone from "../component/MyDropzone";
import SearchPost from "../component/SearchPost";
import UploadBtn from "../component/UploadBtn";
import ReviewBtn from "../component/ReviewBtn";
import qs from 'qs';

const Container = styled.div`
  width: 72%;
  height: 100%;
  padding: 64px 0 0 0;
  margin:0px auto;
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

const SearchResultText = styled.div`
  text-align: center;
  padding-top: 1%;
  padding-bottom: 1%;
  color: gray;
`;

const CHECK_USER = gql`
  query {
    checkUser
  }
`;

const Search = ({location, match}) => {
  // const [type, setType] = useState("all");

  /* const onClick = (e) => {
    setType(e.target.id);
  };*/

  const onClick = (e) => {
      window.location.replace(`/search/${match.params.searchText}?class=${e.target.id}`);
  }

  const urlQuery = qs.parse(location.search, {ignoreQueryPrefix: true});

  const type = urlQuery.class || "all";

  return (
    <Container>
      <SearchResultText>
        '{match.params.searchText}'을(를) 포함한 포스팅입니다.
      </SearchResultText>
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
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
    </Container>
  );
};

export default Search;
