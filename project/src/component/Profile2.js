import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import styled from "styled-components";

const LaterButton = styled.button`
width:100px;
height:50px;
color:gray;
`;

const Button = styled.button`
margin : 10px;
width : 150px;
height : 70px;
color: black;
background-color:white;
border:0px;
`;

const NextButton = styled.button`
margin:10px;
width:100px;
height:50px;
color:gray;
border:0px;
`;

const profile2 = () => {

    let check = React.createElement('input',
        {type: 'checkbox', value: false});

    return(
        <div>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <h1>거의 다 됐어요!</h1>
            </div>

            <div>
                <h4>프로필 이름을 입력해주세요.</h4>
                <input
                    type="text"
                    size="40"
                    placeholder="닉네임 또는 성함을 입력해주세요."
                />
                <h4>생년월일을 입력해주세요.</h4>
                <input
                    name="year"
                    type="text"
                    size="5"
                    placeholder="년(4자)"

                />

                <input
                    name="month"
                    type="text"
                    size="5"
                    placeholder="월"

                />

                <input
                    name="day"
                    type="text"
                    size="5"
                    placeholder="일"

                />

                <h4>위치를 설정해주세요.</h4>
                <input
                    type="text"
                    size="40"
                    placeholder="ex)서대문구, 마포구"
                />


                <br/>
                <Button><u>혹시 프로세요...?</u></Button>
                <h5>{check}이메일 등 프로모션 알림 수신 동의</h5>
            </div>

            <br/><br/><br/>
            <div>
                <NextButton>
                    <Link to={"/profile3"}><FaArrowRight size="50px"/> <br/>다음 단계</Link>
                </NextButton>
            </div>

        </div>
    );
};


export default profile2;