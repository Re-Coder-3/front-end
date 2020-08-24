import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  max-width: 1200px;
  top: 10%;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px;
`;

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
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
          {/* {closable && (
            <button className="modal-close" onClick={close}>
              x
            </button>
          )} */}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

export default Modal;
