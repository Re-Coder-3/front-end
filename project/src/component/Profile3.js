import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import styled from "styled-components";

const LaterButton = styled.button`
width:100px;
height:50px;
color:gray;
`;

const NextButton = styled.button`
margin:10px;
width:100px;
height:50px;
color:gray;
border:0px;
`;

const input = styled.input.attrs({
    type: 'text'
})`
border-radius: 5px;
color: blue;
`;


const profile3 = () => {

    return(
        <div>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <h1>(선택)프로필을 채워주세요!</h1>
            </div>
            <div>
                <input
                    type="text"
                    size="40"
                    placeholder="이력을 입력해주세요."
                />
                <br/>
                <input
                    type="text"
                    size="40"
                    placeholder="학력을 입력해주세요."
                />
                <br />
                <input
                    type="text"
                    size="40"
                    placeholder="간단한 소개를 해주세요."
                />

            </div>
            <div>
                <NextButton>
                    <Link to={"/"}><FaArrowRight size="50px"/> <br/>완료 하기</Link>
                </NextButton>
            </div>
        </div>
    );
};

export default profile3;