import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../component/Input";
import useInput from "../Hooks/useInput";
import BannerImg from "../img/banner.png";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const CATEGORY_LIST = gql`
  query {
    findCategory {
      category_idx
      category_name
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0 11.5%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  border-radius: 50%;
  background-color: pink;
  padding: 5px;
  margin-right: 10px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const IInput = styled(Input)`
  width: 40%;
`;

const Button = styled.div`
  border: 1px solid pink;
  padding: 5px 10px;
  border-radius: 20px;
`;

const Banner = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  padding-left: 5%;
  padding-top: 12%;
  background: url(${BannerImg}) no-repeat center center;
  background-size: cover;
`;

const BannerContentWrapper = styled.div`
  width: 50%;
  font-size: 3.5vw;
  & > div {
    margin-bottom: 1%;
  }
`;

const CircleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
`;

const BannerCircle = styled.div`
  width: 15%;
  padding-bottom: 15%;
  background-color: white;
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 1%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 11.5%;
  margin-top: 30px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
`;

const Content = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 250px;
  height: 250px;
  overflow-x: hidden;
  border: 1px solid black;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Footer = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  /* 폰트사이즈 몇개는 그냥 px값으로 조절해도 상관없긴한데 이런식으로 반응형 해볼수도 있다 정도만 보여드릴려고 쓸데없이 1.5vw로 한거에염 참고만 하셔도 돼요 */
  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;

// *
const Home = () => {
  const search = useInput("");
  const [category, setCategory] = useState([]);
  const { data } = useQuery(CATEGORY_LIST);

  useEffect(() => {
    if (data) {
      console.log(data.findCategory);
      setCategory(data.findCategory);
    }
    console.log(category);
    // setCategory(data);
  }, [data, category]);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo>로</Logo>
          <Title>커리어스팟</Title>
        </TitleWrapper>
        <IInput
          placeholder={"무엇이든 검색해보세요 저도 궁금하네요"}
          {...search}
        ></IInput>
        <Button>버튼버튼</Button>
      </Header>
      <Banner>
        <BannerContentWrapper>
          <div>지금 저는 배가 고픕니다</div>
          <div>군만두 맛있다</div>
          <div>기타등등 아무내용 채워넣기</div>
          <div>365일 배가고프다</div>
          <CircleWrapper>
            <BannerCircle></BannerCircle>
            <BannerCircle></BannerCircle>
            <BannerCircle></BannerCircle>
            <BannerCircle></BannerCircle>
            <BannerCircle></BannerCircle>
          </CircleWrapper>
        </BannerContentWrapper>
      </Banner>
      <ContentContainer>
        <ContentHeader>
          <div>x스크롤 돼요</div>
          <div>실수로 카테고리했네,,, 포스트 query 해야해요,,</div>
        </ContentHeader>
        <ContentWrapper>
          {category &&
            category.map((c) => (
              <Content key={c.category_idx}>{c.category_name}</Content>
            ))}
        </ContentWrapper>
      </ContentContainer>

      <ContentContainer>
        <ContentHeader>
          <div>x스크롤 돼요</div>
          <div>실수로 카테고리했네,,, 포스트 query 해야해요,,</div>
        </ContentHeader>
        <ContentWrapper>
          {category &&
            category.map((c) => (
              <Content key={c.category_idx}>{c.category_name}</Content>
            ))}
        </ContentWrapper>
      </ContentContainer>
      <ContentContainer>
        <ContentHeader>
          <div>x스크롤 돼요</div>
          <div>실수로 카테고리했네,,, 포스트 query 해야해요,,</div>
        </ContentHeader>
        <ContentWrapper>
          {category &&
            category.map((c) => (
              <Content key={c.category_idx}>{c.category_name}</Content>
            ))}
        </ContentWrapper>
      </ContentContainer>
      <Footer>
        <div>만두</div>
        <div>라면</div>
        <div>짜장</div>
        <div>짬뽕</div>
        <div>기타</div>
        <div>등등</div>
        <div>배고픈</div>
        <div>하루</div>
      </Footer>
    </Container>
  );
};

export default Home;
