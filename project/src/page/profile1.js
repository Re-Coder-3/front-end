import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import styled from "styled-components";

const LaterButton = styled.button`
width:100px;
height:50px;
color:gray;
`;

const SelectButton = styled.button`
margin : 10px;
width : 70px;
height : 70px;
color: black;
background-color:white;
border:0px;
`;

const NextButton = styled.button`
margin:10px;
width:100px;
height:100px;
color:gray;
border:0px;
`;

const profile1 = () => {
    const selectbeauty = () => {
        document.getElementById('beauty').style.backgroundColor = 'gray';
    }
    const selectshot= () => {
        document.getElementById('shot').style.backgroundColor = 'gray';
    }
    const selectedu = () => {
        document.getElementById('edu').style.backgroundColor = 'gray';
    }
    const selectmedi = () => {
        document.getElementById('medi').style.backgroundColor = 'gray';
    }
    const selectetc = () => {
        document.getElementById('etc').style.backgroundColor='gray';

    }
    return(
        <div>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <h1>간단한 프로필 작성하고 가세요!</h1>
            </div>
            <div>
                <SelectButton
                    id = "beauty"
                    property = "false"
                    onClick={selectbeauty}>
                    <FaApple size="1x"  />뷰티
                </SelectButton>
                <SelectButton
                    id = "education"
                    onClick={selectedu}>
                    <FaApple size="1x"  />교육
                </SelectButton>
                <SelectButton
                    id = "shot"
                    onClick={selectshot}>
                    <FaApple size="1x"  />촬영
                </SelectButton>
                <SelectButton
                    id = "medical"
                    onClick={selectmedi}>
                    <FaApple size="1x"  />의료
                </SelectButton>
                <SelectButton
                    id = "etc"
                    onClick={selectetc}>
                    <FaApple size="1x"  />기타
                </SelectButton>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div>
                <h3>하나 이상의 관심분야를 선택해 주세요. <br/>
                    적합한 컨텐츠를 추천해 드리는 데 도움이 됩니다!</h3>
                <NextButton>
                    <Link to={"/profile2"}><FaArrowRight size="50px"/> <br/>다음 단계</Link>
                </NextButton>
            </div>

        </div>
    );
};


export default profile1;