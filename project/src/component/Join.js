import React, {useCallback, useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import styled from "styled-components";

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



const Join = () => {
    const [email,setEmail] = useState("");
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const [msg,setMsg] = useState("");
    const [success,setSuccess] = useState(false);

    const memberEmail = useCallback((e)=>{
        setEmail(e.target.value);
    },[]);
    const memberID = useCallback((e) => {
        setId(e.target.value);
        },[]);
    const memberPW = useCallback((e) => {
        setPassword(e.target.value);
        },[]);


    const onSubmit = () => {
            if ((id==='') || (password==='')) {
                setSuccess(false);
            }
            else
                setSuccess (true);
        };

        return (
           <div>
               <Input
                    type="text"
                    name="email"
                    size = "40"
                    placeholder="이메일을 입력해주세요."
                    value={email}
                    onChange={memberEmail}
                />
                <br/><br/><br/>

               <Input
                    type="text"
                    name="id"
                    size = "40"
                    placeholder="아이디를 입력해주세요."
                    value={id}
                    onChange={memberID}
                />
                <br/><br/><br/>


               <Input
                    type="password"
                    name="password"
                    size = "40"
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    onChange={memberPW}
                />

                <h6>{msg}</h6>
            </div>
        );
    };


export default Join;