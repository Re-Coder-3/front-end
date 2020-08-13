import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import Input from "../component/Input";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15vh;
  padding: 0 11%;
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
  background-color: blue;
`;

const CHECK_USER = gql`
  query {
    checkUser
  }
`;
const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file)
  }
`;

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState("all");
  const title = useInput("");
  const hashtag = useInput("");
  const content = useInput("");
  const [upload] = useMutation(UPLOAD_FILE);

  const onClick = (e) => {
    setType(e.target.id);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
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
        <button onClick={openModal}>글쓰기</button>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            <Input placeholder={"title"} {...title}></Input>
            <Input placeholder={"hashtag"} {...hashtag}></Input>
            <Input placeholder={"content"} {...content}></Input>
          </Modal>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Search;
