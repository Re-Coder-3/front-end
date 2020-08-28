import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "./Modal";
import { device } from "../styles/responsive";
import useWindowSize from "../Hooks/useWindowSize";
import { Star } from "./Icons";

const Textarea = styled.textarea`
  overflow: auto;
  resize: none;
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

const ReviewHeader = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 28px;
`;

const StarBox = styled.div`
  display: flex;
  & > div {
    cursor: pointer;
  }
`;

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file)
  }
`;

const STAR_COUNT = new Array(5).fill(0);

export default () => {
  const size = useWindowSize();
  const [modalVisible, setModalVisible] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [star, setStar] = useState(0);

  const clickStar = ({
    target: {
      parentNode: { id },
    },
  }) => {
    const num = parseInt(id);
    console.log(id);
    if (num === 1) {
      setStar(1);
    }
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setTextarea(value);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Btn onClick={openModal}>Review</Btn>

      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          size={size}
          type={"review"}
        >
          <ReviewHeader>
            <Title>최근에 서비스를 받으셨네요! 어떠셨나요?</Title>
            <StarBox>
              {STAR_COUNT.map((_, i) => (
                <div onClick={clickStar} key={i} onClick={() => setStar(i + 1)}>
                  <Star selected={i < star} />
                </div>
              ))}
            </StarBox>
          </ReviewHeader>
          <Textarea
            rows={"7"}
            placeholder={"설명글을 입력해주세요"}
            onChange={onChange}
          ></Textarea>
        </Modal>
      )}
    </>
  );
};
