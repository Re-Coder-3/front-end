import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";
import MyDropzone from "../component/MyDropzone";
import SearchPost from "../component/SearchPost";
import UploadBtn from "../component/UploadBtn";
import ReviewBtn from "../component/ReviewBtn";
import Header from "../component/Header";
import BrandImage from "../img/BrandImage.jpg";

const Container = styled.div`
  width: 100%;
  height: 180vh;
  padding: 64px 11% 0 11%;
`;

const Option = styled.div`
  margin-top: 5%;
  width: 100%;
  font-size: 26px;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;

const Item = styled.div`
  font-weight: ${(props) => (props.option ? 600 : 300)};
`;

const Image = styled.div`
  background-image: url(${BrandImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30%;
  margin-top: 3%;
`;

const TextBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
  & > div > span {
    font-weight: 600;
  }
  & > div:nth-child(1) {
    margin-bottom: 45px;
  }
  & > div:nth-child(2) {
    margin-bottom: 45px;
  }
  & > div:nth-child(3) {
    margin-bottom: 60px;
  }
  & > div:nth-child(4) {
    margin-bottom: 70px;
  }
  & > div:nth-child(5) {
    margin-bottom: 70px;
  }
  & > div:nth-child(6) {
    margin-bottom: 40px;
  }
  & > div:nth-child(7) > span {
    background: linear-gradient(
        314.95deg,
        #feeebb 0%,
        rgba(255, 255, 255, 0) 99.38%
      ),
      #f9b8b4;
  }
`;

const Brand = () => {
  const [option, setOption] = useState("brand");

  const onClick = (e) => {
    const {
      target: { id },
    } = e;
    if (id === "brand") {
      setOption("brand");
    } else {
      setOption("service");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Option>
          <Item id={"brand"} onClick={onClick} option={option === "brand"}>
            브랜드 소개
          </Item>
          <Item id={"service"} onClick={onClick} option={option === "service"}>
            서비스 소개
          </Item>
        </Option>
        <Image></Image>
        <TextBox>
          <div>
            아르바이트 하나를 구하더라도 공고글에 항상 적혀있는
            <span>‘경력자 우대’</span>
          </div>
          <div>
            <span>“뽑아 줘야 경력이 생기지...”</span>
          </div>
          <div>커리어스팟은 생각했습니다.</div>
          <div>
            꼭 고용주에게 의존한 경력만 경력이라고 할 수 있을까?
            <br />
            클라이언트를직접 선택하여 서비스를 제공함으로써
            <br />
            공급자와 수요자 모두에게 좋은경험이 되지 않을까?
            <br />
            스스로 만드는 기회에서 오는 성장은 더 크지않을까?
          </div>
          <div>
            특히, 전문직을 준비하고 있는 이들에게 포트폴리오는 매우 중요합니다.
            <br />
            하지만, 실제 클라이언트와의 접점을 만들기 쉽지 않은 이들은
            <br />
            포트폴리오의 대부분이 습작일 뿐입니다.
          </div>
          <div>커리어스팟이 돕겠습니다!</div>
          <div>
            누가 시키는 것이 아닌 직접 모든 과정을 해나가봄으로써
            <br />
            <span>실제 결과물을내는 것, 나만의 경력을 쌓도록 돕는 것.</span>
            <br />
            이것이 커리어스팟이 추구하는 가치입니다.
          </div>
        </TextBox>
      </Container>
    </>
  );
};

export default Brand;
