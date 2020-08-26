import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import Input from "./Input";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "./Modal";
import MyDropzone from "./MyDropzone";
import { Pencil } from "./Icons";
import useWindowSize from "../Hooks/useWindowSize";
import { device } from "../styles/responsive";

const MContentWrapper = styled.div`
  padding: 3% 5% 0 5%;
  width: 100%;
  height: 90%;
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const MInputBox = styled.div`
  width: 60%;
  height: 90%;
  @media ${device.tablet} {
    width: 80%;
    height: 75%;
  }
  @media ${device.mobileS} {
    width: 90%;
    height: 60%;
  }
`;

const UploadBox = styled.div`
  width: 40%;
  height: 90%;
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3%;
  padding: 4px;
  background: linear-gradient(
      311.48deg,
      #ffe143 -3.24%,
      rgba(255, 255, 255, 0) 78.93%
    ),
    #f04e44;
  border-radius: 10px;
  grid-gap: 4px;
  overflow-x: scroll;
  @media ${device.tablet} {
    width: 70%;
    height: 70%;
    margin-left: 0;
    margin-top: 2%;
    display: flex;
    overflow-x: scroll;
    max-height: 123px;
  }
  @media ${device.mobileS} {
    width: 90%;
    height: 50%;
    max-height: 93px;
  }
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
  @media ${device.tablet} {
    margin-top: 15%;
  }
  @media ${device.mobileS} {
    margin-top: 10%;
  }
`;

const Btn = styled.span`
  cursor: pointer;
`;

const UPLOAD_BOX_COUNT = new Array(9).fill(0);

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export default () => {
  const size = useWindowSize();
  const [modalVisible, setModalVisible] = useState(false);
  const title = useInput("");
  const hashtag = useInput("");
  const [textarea, setTextarea] = useState("");

  const [upload] = useMutation(UPLOAD_FILE);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setTextarea(value);
  };
  return (
    <>
      <Btn onClick={openModal}>
        <Pencil />
      </Btn>

      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          size={size}
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
                onChange={onChange}
              ></Textarea>
            </MInputBox>
            <UploadBox>
              {UPLOAD_BOX_COUNT.map(() => (
                <MyDropzone></MyDropzone>
              ))}
            </UploadBox>
          </MContentWrapper>
        </Modal>
      )}
    </>
  );
};
