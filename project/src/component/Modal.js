import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../styles/responsive";

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
  height: 70%;
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

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  size,
}) => {
  const onMaskClick = (e) => {
    // * event.target 은 현재 타겟
    // * event.currentTarget 은 현재 타겟을 바인딩 하고있는 요소가 있으면 그것을 의미.
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose();
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
        <ModalInner tabIndex="0" className="modal-inner">
          {size.width > 768 ? (
            <>
              {children}
              <ButtonWrapper>
                {closable && <div onClick={close}>닫기</div>}
                <div>등록</div>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <ButtonWrapper>
                {closable && <div onClick={close}>닫기</div>}
                <div>등록</div>
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
