import React, { useState } from "react";
import styled from "styled-components";
import AuthImage from "../img/Auth.jpg";
import useInput from "../Hooks/useInput";
import Input from "../component/Input";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440;
  padding-right: 12%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${AuthImage}) no-repeat center center;
  background-size: cover;
  position: relative;
`;
const AuthWrapper = styled.div`
  position: absolute;
  right: 8%;
  top: 23%;
  width: 25%;
  height: 30%;
`;
const AuthHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div:nth-child(2) {
    margin-right: 30%;
  }
  margin-bottom: 20px;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & > input:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Option = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #545454;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 400px;
  height: 40px;
  background: linear-gradient(
      311.48deg,
      #ffe143 -3.24%,
      rgba(255, 255, 255, 0.5) 78.93%
    ),
    #f04e44;
  //opacity: 0.6;
  border-radius: 20px;
  text-align: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #6b6b6b;
  font-weight: bold;
`;
const SocialAuth = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const BtnWrapper = styled.div`
  display: flex;
  & > div {
    margin-right: 15px;
  }
`;
const H = styled.h2`
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #8c8c8c;
`;

const Auth = () => {
  const [formType, setFormType] = useState("login");
  console.log(formType);
  const email = useInput("");
  const password = useInput("");
  const password2 = useInput("");

  return (
    <Container>
      <Wrapper>
        <AuthWrapper>
          <AuthHeader>
            <Option onClick={() => setFormType("login")}>로그인</Option>
            <Option onClick={() => setFormType("auth")}>회원가입</Option>
            <Option onClick={() => setFormType("find")}>찾기</Option>
          </AuthHeader>
          <InputWrapper>
            {formType === "login" ? (
              <>
                <Input placeholder={"이메일을 입력해주세요."} {...email} />
                <Input placeholder={"비밀번호를 입력해주세요."} {...password} />
              </>
            ) : formType === "auth" ? (
              <>
                <Input placeholder={"이메일을 입력해주세요."} {...email} />
                <Input placeholder={"비밀번호를 입력해주세요."} {...password} />
                <Input
                  placeholder={"비밀번호를 다시 입력해주세요."}
                  {...password2}
                />
              </>
            ) : (
              <Input placeholder={"등록된 이메일을 입력해주세요."} {...email} />
            )}
          </InputWrapper>
          {formType === "login" ? (
            <Button>로그인</Button>
          ) : formType === "auth" ? (
            <Button>회원가입</Button>
          ) : (
            <Button>메일로 비밀번호 발급받기</Button>
          )}
          <SocialAuth>
            <br />
            <br />
            <br />
            {formType === "login" ? <H>또는</H> : null}
            <BtnWrapper>
              <div>K</div>
              <div>N</div>
            </BtnWrapper>
          </SocialAuth>
        </AuthWrapper>
      </Wrapper>
    </Container>
  );
};

export default Auth;
