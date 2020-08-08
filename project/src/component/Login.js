import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import styled from "styled-components";
import login from "../img/login.png";

const Input = styled.input`
width: 371px;
left: 771px;
top: 290px;
font-size: 18px;
padding: 10px;
margin-left:700px;
margin-top: 50px;
border: none;
border-bottom: 1.5px solid #f04244 ;
background: none;
`;

const Section = styled.div`
  margin: 0px;
  border: 0px;
  background-image: url(${login});
  background-repeat: no-repeat;
  background-size: cover;
`;



/*일반 회색 버튼(선택되지 않은 버튼)*/
const Btn1 = styled.div`
float:left;
margin-top: 150px;
margin-left:20px;
width :70px;
height:30px;
color:#545454;
background:none;
border:none;
A {text-decoration: none; color: #545454;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
font-weight: bold;

`;
/*핑크색 버튼(선택된 버튼)*/
const Btn2 = styled.div`
float:left;
margin-top: 150px;
margin-left:730px;
width :70px;
height:30px;
color:#DE4726;
background:none;
border:none;
A {text-decoration: none; color: #DE4726;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
font-weight: bold;
`

const LoginBtn = styled.div`
position: absolute;
width: 370px;
height: 40px;
left: 720px;
top: 450px;
background: linear-gradient(311.48deg, #FFE143 -3.24%, rgba(255, 255, 255, 0) 78.93%), #F04E44;
opacity: 0.4;
border-radius: 20px;
text-align: center;
font-family: Noto Sans KR;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 29px;
color: #6B6B6B;
A {text-decoration: none; color: color: #6B6B6B;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
font-weight: bold;
`;

const H = styled.h2`
position: absolute;
width: 60px;
height: 32px;
left: 772px;
top: 478px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #8C8C8C;
`;

const Login= () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const memberEmail = useCallback((e) => {
        setEmail(e.target.value);
    },[]);
    const memberPW = useCallback((e) => {
        setPassword(e.target.value);
    },[]);
    return(
        <Section>

            <Btn2>
                <Link to={"/Login"}>로그인</Link>
            </Btn2>


            <Btn1>
               <Link to={"/profile"}>회원가입</Link>
            </Btn1>

            <Btn1>
               <Link to={"/find"}>찾기</Link>
            </Btn1>


            <Input
                type="text"
                name="id"
                placeholder="이메일을 입력해주세요."
                onChange={memberEmail}
            />
            <Input
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={memberPW}
            />
            <LoginBtn><Link to="/">로그인</Link></LoginBtn>
            <br/><br/><br/><br/>
            <H>또는</H>
        </Section>
    );
};



export default Login;









