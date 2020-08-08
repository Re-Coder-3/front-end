import React, { useState } from "react";
import styled from "styled-components";
import AuthImage from "../img/Auth.jpg";
import useInput from "../Hooks/useInput";
import Input from "../component/Input";

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

const Auth = () => {
  const [formType, setFormType] = useState("login");
  console.log(formType);
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");

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
                <Input placeholder={"password"} {...password} />{" "}
              </>
            ) : formType === "auth" ? (
              <>
                <Input placeholder={"username"} {...username} />
                <Input placeholder={"email"} {...email} />
                <Input placeholder={"password"} {...password} />{" "}
              </>
            ) : (
              <Input placeholder={"email"} {...email} />
            )}
          </InputWrapper>
          {formType === "login" ? (
            <Button>로그인</Button>
          ) : formType === "auth" ? (
            <Button>회원가입</Button>
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
