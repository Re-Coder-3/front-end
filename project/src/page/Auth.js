import React, { useState } from "react";
import styled from "styled-components";
import AuthImage from "../img/Auth.jpg";
import useInput from "../Hooks/useInput";
import Input from "../component/Input";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

/*
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
*/

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

const LOGIN = gql`
  mutation loginUser($user_email: String!, $user_password: String!) {
    loginUser(user_email: $user_email, user_password: $user_password) {
      data
      error
      status
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($user_email: String!, $user_password: String!) {
    createUser(user_email: $user_email, user_password: $user_password) {
      error
      status
    }
  }
`;

const Auth = () => {
  const [formType, setFormType] = useState("login");

  const email = useInput("");
  const password = useInput("");
  const password2 = useInput("");
  const [createUser] = useMutation(CREATE_USER, {
    variables: { user_email: email.value, user_password: password.value },
  });
  const [loginUser] = useMutation(LOGIN, {
    variables: { user_email: email.value, user_password: password.value },
  });

  const LOG_IN = gql`
    mutation loginState($token: String!) {
      loginState(token: $token) @client
    }
  `;
  const [loginStateMutation] = useMutation(LOG_IN);

  const signInClick = async (event) => {
    event.preventDefault();
    const result = await loginUser();
    if (result) {
      const {
        data: {
          loginUser: { data: token, status, error },
        },
      } = result;
      console.log(token, error, status);
      if (status === 200) {
        loginStateMutation({ variables: { token } });
      }
    }
  };

  const signUpClick = async (event) => {
    event.preventDefault();
    const result = await createUser();
    if (result) {
      const {
        data: {
          createUser: { status, error },
        },
      } = result;
      if (status === 200) {
        alert("회원가입 성공했따");
        setFormType("login");
      }
    }
  };

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
                <Input
                  placeholder={"비밀번호를 입력해주세요."}
                  {...password}
                  type={"password"}
                />
              </>
            ) : formType === "auth" ? (
              <>
                <Input placeholder={"email"} {...email} />
                <Input
                  placeholder={"password"}
                  {...password}
                  type={"password"}
                />
                <Input
                  placeholder={"password2"}
                  {...password2}
                  type={"password"}
                />
              </>
            ) : (
              <Input placeholder={"등록된 이메일을 입력해주세요."} {...email} />
            )}
          </InputWrapper>
          {formType === "login" ? (
            <Button onClick={signInClick}>로그인</Button>
          ) : formType === "auth" ? (
            <Button onClick={signUpClick}>회원가입</Button>
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
