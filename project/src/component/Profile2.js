import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import styled from "styled-components";

const LaterButton = styled.button`
width:100px;
height:50px;
color:gray;
margin-left:1300px;
`;

const ProButton = styled.button`
margin-left : 40%;
width : 300px;
height : 70px;
color: black;
background: none;
border:0px;
font-size: 30px;
`;

const NextButton = styled.button`
margin-left:1300px;
width:100px;
height:50px;
border:0px;
`;

const H1 = styled.h1`
position: absolute;
width: 600px;
height: 76px;
margin-left: 40%;
font-family: Saira Stencil One;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 76px;
/* identical to box height */
color: #353535;`

const Input = styled.input`
width: 371px;
left: 771px;
top: 290px;
font-size: 18px;
padding: 10px;
margin-left:700px;
border: none;
border-bottom: 1.5px solid #f04244 ;
`;

const H3 = styled.h3`
margin: 0px;
margin-left:710px;
`;

const H5 = styled.h5`
position: absolute;
width: 500px;
height: 29px;
margin-left:35%;

font-family: Noto Sans KR;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 29px;
/* identical to box height */

text-align: center;
letter-spacing: -0.02em;

color: #585858;
`;


const Profile2 = () => {
    const [name,setName] = useState();
    const [year,setYear] = useState("");
    const [month,setMonth] = useState("");
    const [day, setDay] = useState("");
    const [location,setLocation] = useState("");

    const myName = useCallback((e)=>{
        setName(e.target.value);
    },[]);
    const myYear = useCallback((e) => {
        setYear(e.target.value);
    },[]);
    const myMonth = useCallback((e) => {
        setMonth(e.target.value);
    },[]);
    const myDay = useCallback((e) => {
        setDay(e.target.value);
    },[]);
    const myLocation = useCallback((e) => {
        setLocation(e.target.value);
    },[]);

    let check = React.createElement('input',
        {type: 'checkbox', value: false});

    return(
        <div>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <H1>거의 다 됐어요!</H1>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
                <H3>프로필 이름을 입력해주세요.</H3>
                <Input
                    type="text"
                    size="40"
                    placeholder="닉네임 또는 성함을 입력해주세요."
                    onChange={myName}
                />
                <br/><br/><br/>

                <H3>생년월일을 입력해주세요.</H3>
                <Input
                    name="year"
                    type="text"
                    size="5"
                    placeholder="년(4자)"
                    onChange={myYear}
                />

                <Input
                    name="month"
                    type="text"
                    size="5"
                    placeholder="월"
                    onChange={myMonth}
                />

                <Input
                    name="day"
                    type="text"
                    size="5"
                    placeholder="일"
                    onChange={myDay}
                />

                <br/><br/><br/>
                <H3>위치를 설정해주세요.</H3>
                <Input
                    type="text"
                    size="40"
                    placeholder="ex)서대문구, 마포구"
                    onChange={myLocation}
                />
                <br/><br/><br/><br/>
                <ProButton><u>혹시 프로세요...?</u></ProButton>
                <H5>{check}이메일 등 프로모션 알림 수신 동의</H5>
            </div>

            <br/><br/><br/><br/><br/><br/>
            <div>
                <NextButton>
                    <Link to={"/profile3"}><FaArrowRight size="50px"/> <br/>다음 단계</Link>
                </NextButton>
            </div>

        </div>
    );
};


export default Profile2;