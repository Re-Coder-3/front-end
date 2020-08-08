import React from "react";
import styled from "styled-components";
import Search from "./Search";
import login from "../img/login.PNG";

const Head = styled.div`
  height: 4vw;
  width: 100%;
  position: fixed;
  background-color: white;
  display: flex
`
const Login = styled.div`
  width: 7vw;
`

const SearchDiv = styled.div`
`

const Header = () => {
    return (
        <Head>
            로고
            <SearchDiv>
                <Search/>
            </SearchDiv>
            <Login><img src={login} width="100%" alt="로그인"/></Login>
        </Head>
    );
}

// 헤더. 홈페이지의 맨 위에 들어가는 부분입니다.

export default Header;