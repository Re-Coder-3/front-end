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
  width: 29%;
  height: 30%;
`;

const AuthHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div:nth-child(2) {
    margin-right: 35%;
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

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: pink;
  cursor: pointer;
  color: black;
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
            <div onClick={() => setFormType("login")}>로그인</div>
            <div onClick={() => setFormType("auth")}>회원가입</div>
            <div onClick={() => setFormType("find")}>찾기</div>
          </AuthHeader>
          <InputWrapper>
            {formType === "login" ? (
              <>
                <Input placeholder={"email"} {...email} />
                <Input
                  placeholder={"password"}
                  {...password}
                  type={"password"}
                />{" "}
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
              <Input placeholder={"email"} {...email} />
            )}
          </InputWrapper>
          {formType === "login" ? (
            <Button onClick={signInClick}>로그인</Button>
          ) : formType === "auth" ? (
            <Button onClick={signUpClick}>회원가입</Button>
          ) : (
            <Button>메일로 비밀번호 찾기</Button>
          )}
          <SocialAuth>
            <div>또는</div>
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
