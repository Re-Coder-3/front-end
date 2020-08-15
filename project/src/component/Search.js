import React from "react";
import styled from "styled-components";
import {SearchIcon} from "./Icons";

const SearchInp = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 2vw;
  border-color: #F04E44;
  border-style: solid;
    &:focus {
    outline: none;
  }
  padding: 0 20px 0 35px;
`
const Icon = styled.div`
  position: relative;
  top: -23px;
  left: 10px;
  width:16px;
`

const Search = () => {
    return (
        <>
            <SearchInp />
            <Icon>
                <SearchIcon/>
            </Icon>
            </>
    );
}

// 검색창이 될 부분.

export default Search;