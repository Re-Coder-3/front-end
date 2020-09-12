import React, {useState} from "react";
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

const SizeForm = styled.form`
  height: 100%;
  width: 100%;
`

const Icon = styled.div`
  position: relative;
  top: -23px;
  left: 10px;
  width:16px;
`

const InvisibleButton = styled.button`
  border: none;
  background: none;
`

const SearchBar = () =>{
    const [text, setText] = useState('');

    const onChangeText = e =>{
        setText(e.target.value);
    };

    const submitLink = (e) =>{
        e.preventDefault();
        window.location.replace(`/search/${text}?class=all`);
    }

    return (
        <>
            <SizeForm onSubmit={submitLink}>
                <SearchInp value={text} placeholder="검색창" onChange={onChangeText}/>
            <Icon>
                <InvisibleButton type='submit'><SearchIcon/></InvisibleButton>
            </Icon>
            </SizeForm>
        </>
    );
}

// 검색창이 될 부분.

export default SearchBar;