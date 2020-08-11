import React from "react";
import styled from "styled-components";

const SearchInp = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 2vw;
  border-color: #F04E44;
  border-style: solid;
`

const Search = () => {
    return (
        <>
            <SearchInp />
            </>
    );
}

// 검색창이 될 부분.

export default Search;