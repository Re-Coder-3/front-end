import React from "react";
import Search from "./Search";
import styled from "styled-components";

const Head = styled.div`
  height: 4vw;
`

const Header = () => {
    return (
        <Head>
            로고
            <Search/>
            로그인
        </Head>
    );
}

// 헤더. 홈페이지의 맨 위에 들어가는 부분입니다.

export default Header;