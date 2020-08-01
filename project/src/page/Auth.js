import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440;
`;

const Wrapper = styled.div`
  width: 86%;
  height: 100%;
  background-color: black;
`;

const AuthWrapper = styled.div``;

const AuthHeader = styled.div``;

const InputWrapper = styled.div``;

const Button = styled.button``;

const SocialAuth = styled.div``;

const Auth = () => {
  return (
    <Container>
      <Wrapper>
        <AuthWrapper>
          <AuthHeader></AuthHeader>
          <InputWrapper></InputWrapper>
          <Button></Button>
          <SocialAuth></SocialAuth>
        </AuthWrapper>
      </Wrapper>
    </Container>
  );
};

export default Auth;
