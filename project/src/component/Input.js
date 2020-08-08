import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputBox = styled.input`
  border: 0;  
  border-bottom: 1px solid pink;
  margin-top: 20px;
  width: 400px;
  height: 35px;
  font-size: 18px;
  padding: 0px 15px;
  color: grey;

`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
}) => (
  <InputBox
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
