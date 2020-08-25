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

const MContentWrapper = styled.div`
  padding: 3% 5% 0 5%;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: ${(props) => (props.size.width > 900 ? "row" : "column")};
`;

const MInputBox = styled.div`
  width: ${(props) => (props.size.width > 900 ? "60%" : "90%")};
  height: ${(props) => (props.size.width > 900 ? "90%" : "60%")};
`;

const UploadBox = styled.div`
  width: ${(props) => (props.size.width > 900 ? "40%" : "90%")};
  height: ${(props) => (props.size.width > 900 ? "90%" : "30%")};
  margin-left: ${(props) => (props.size.width > 900 ? "50px" : "0")};
  margin-top: 3%;
  padding: 4px;
  background: linear-gradient(
      311.48deg,
      #ffe143 -3.24%,
      rgba(255, 255, 255, 0) 78.93%
    ),
    #f04e44;
  border-radius: 10px;
  display: ${(props) => (props.size.width > 900 ? "grid" : "flex")};
  grid-template-columns: ${(props) =>
    props.size.width > 900 ? "repeat(3, 1fr)" : "none"};
  grid-gap: 4px;
  overflow-x: scroll;
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
  margin-top: ${(props) => (props.size.width > 900 ? "25%" : "10%")};
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
          <MContentWrapper size={size}>
            <MInputBox size={size}>
              <MInput placeholder={"제목을 써주세요"} {...title}></MInput>
              <MInput
                placeholder={"분야, 장소 등 조건을 써주세요"}
                {...hashtag}
              ></MInput>
              <Textarea
                size={size}
                rows={"7"}
                placeholder={"설명글을 입력해주세요"}
                onChange={onChange}
              ></Textarea>
            </MInputBox>
            <UploadBox size={size}>
              {size.width > 900
                ? UPLOAD_BOX_COUNT.map(() => <MyDropzone></MyDropzone>)
                : UPLOAD_BOX_COUNT.map(() => <MyDropzone></MyDropzone>)}
            </UploadBox>
          </MContentWrapper>
        </Modal>
      )}
    </>
  );
};
