import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import Input from "../component/Input";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";
import MyDropzone from "../component/MyDropzone";

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
  background-color: blue;
`;

const MContentWrapper = styled.div`
  padding: 3% 5% 0 5%;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

const MInputBox = styled.div`
  width: 60%;
  height: 100%;
`;

const UploadBox = styled.div`
  width: 40%;
  height: 90%;
  margin-left: 50px;
  margin-top: 3%;
  padding: 4px;
  background: linear-gradient(
      311.48deg,
      #ffe143 -3.24%,
      rgba(255, 255, 255, 0) 78.93%
    ),
    #f04e44;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
`;

const MInput = styled(Input)`
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  overflow: auto;
  resize: none;
  background-image: linear-gradient(
    white,
    white 22px,
    #f04e44 22px,
    #f04e44 23px,
    white 23px
  );
  margin-top: 25%;
  border-style: none;
  outline: none;
  background-size: 100% 23px;
  border-radius: 8px;
  line-height: 23px;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2%;
  & > div:first-child {
    color: grey;
  }
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

const UPLOAD_BOX_COUNT = new Array(9).fill(0);

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
            <MContentWrapper>
              <MInputBox>
                <MInput placeholder={"제목을 써주세요"} {...title}></MInput>
                <MInput
                  placeholder={"분야, 장소 등 조건을 써주세요"}
                  {...hashtag}
                ></MInput>
                <Textarea
                  rows={"7"}
                  placeholder={"설명글을 입력해주세요"}
                ></Textarea>
              </MInputBox>
              <UploadBox>
                {UPLOAD_BOX_COUNT.map((box) => (
                  <MyDropzone></MyDropzone>
                ))}
              </UploadBox>
            </MContentWrapper>
            <ButtonWrapper>
              <div>취소</div>
              <div>올리기</div>
            </ButtonWrapper>
          </Modal>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Search;
