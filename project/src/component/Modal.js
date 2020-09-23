import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../styles/responsive";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 20px;
  width: 100%;
  height: ${(props) => (props.type === "review" ? "45%" : "70%")};
  top: 10%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px;
  @media ${device.tablet} {
    height: 80%;
  }
  @media ${device.mobileS} {
    top: 0;
    height: 100%;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2%;
  font-size: 28px;
  & > div:first-child {
    color: grey;
  }
  & > div:last-child {
    font-weight: 600;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;
const QUERY = gql`
  {
    UrlArr @client
  }
`;
const CREATE_POST = gql`
  mutation createPost1(
    $image_url: [String]
    $post_title: String!
    $post_content: String!
    $post_location: String
    $hashtag_name: String
  ) {
    createPost1(
      image_url: $image_url
      post_title: $post_title
      post_content: $post_content
      post_location: $post_location
      hashtag_name: $hashtag_name
    ) {
      error
      status
    }
  }
`;
const URL = gql`
  {
    UrlArr @client
  }
`;

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  size,
  type,
  post_title,
  post_content,
  hashtag_name,
}) => {
  const {
    data: { UrlArr },
  } = useQuery(QUERY);
  const REMOVE_URL = gql`
    mutation removeUrl($bool: String) {
      removeUrl(bool: $bool) @client
    }
  `;
  const [removeUrlMutation] = useMutation(REMOVE_URL);
  const [createPost] = useMutation(CREATE_POST);

  const onMaskClick = async (e) => {
    // * event.target 은 현재 타겟
    // * event.currentTarget 은 현재 타겟을 바인딩 하고있는 요소가 있으면 그것을 의미.
    if (e.target === e.currentTarget) {
      onClose();
      const bool = "bool";
      await removeUrlMutation({ variables: { bool } });
    }
  };

  const close = async (e) => {
    if (onClose) {
      onClose();
      const bool = "bool";
      await removeUrlMutation({ variables: { bool } });
    }
  };

  const onClick = async () => {
    const bool = "bool";

    console.log(UrlArr);
    console.log(post_title.value, post_content, hashtag_name);
    const a = await createPost({
      variables: {
        image_url: UrlArr,
        post_title: post_title.value,
        post_content,
        hashtag_name: hashtag_name.value,
      },
    });
    console.log(a);

    setTimeout(1000);
    await removeUrlMutation({ variables: { bool } });
    if (onClose) {
      onClose();
      const bool = "bool";
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner" type={type}>
          {size.width > 768 ? (
            <>
              {children}
              <ButtonWrapper>
                {closable && <div onClick={close}>닫기</div>}
                <div onClick={onClick}>등록</div>
              </ButtonWrapper>
            </>
          ) : type === "review" ? (
            <>
              {children}
              <ButtonWrapper>
                {closable && <div onClick={close}>닫기</div>}
                <div onClick={onClick}>등록</div>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <ButtonWrapper>
                {closable && <div onClick={close}>닫기</div>}
                <div onClick={onClick}>등록</div>
              </ButtonWrapper>
              {children}
            </>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

export default Modal;
