import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import styled from "styled-components";


const ButtonDiv = styled.div`
margin-left: 400px;
margin-top: 50px;
`;

const LaterButton = styled.button`
width:100px;
height:100px;
color: gray;
margin-left:80%;
background:none;
border:none;
A {text-decoration: none; color: gray;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
`;

const SelectButton = styled.button`
margin: 20px;
width : 110px;
height : 110px;
color: black;
background-color:white;
font-size: 40px;
border:0px;

`;

const NextButton = styled.button`
margin-left:80%;
width:100px;
height:100px;
color:gray;
border:0px;
background:none;
A {text-decoration: none; color: gray;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
`;

const H1 = styled.h1`
position: absolute;
width: 900px;
height: 72px;
left: 407px;
top: 300px;
font-family: Kohinoor Gujarati;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 72px;
color: #353535;
`;

const H2 = styled.h1`
position: absolute;
margin-left: 200px;
width: 1300px;
height: 82px;
font-family: Noto Sans KR;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 41px;
text-align: center;
color: #363636;
`;


const Profile1 = () => {
    const [category,setCategory] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        setCategory([...category,e.target.id]);
        console.log(category);
    };
    
        /*
                if (e.property==true){
                    e.property = false;
                    //배열에서 삭제
                }
                else{
                    e.property = true;
                    newCategory.push(e.target.id);
                }

           */




    return(
        <div>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <H1>간단한 프로필 작성하고 가세요!  🤗 </H1>
            </div>

            <ButtonDiv>
                <SelectButton
                    id = "beauty"
                    value = "beauty"
                    property = "false"
                    onClick={onClick}
                >
                    <FaApple size="1x"  />뷰티
                </SelectButton>

                <SelectButton
                    id = "education"
                    value = "education"
                    property = "false"
                    onClick={onClick}
                >
                    <FaApple size="1x"  />교육
                </SelectButton>

                <SelectButton
                    id = "shot"
                    value = "shot"
                    property = "false"
                    onClick={onClick}
                >
                    <FaApple size="1x"  />촬영
                </SelectButton>

                <SelectButton
                    id = "medical"
                    value = "medical"
                    property = "false"
                    onClick={onClick}
                >
                    <FaApple size="1x"  />의료
                </SelectButton>

                <SelectButton
                    id = "etc"
                    value = "etc"
                    property = "false"
                    onClick={onClick}
                >
                    <FaApple size="1x"  />기타
                </SelectButton>

            </ButtonDiv>
            <br/><br/><br/>
            <div>
                <br/><br/><br/>
                <H2>하나 이상의 관심분야를 선택해 주세요. <br/>
                    적합한 컨텐츠를 추천해 드리는 데 도움이 됩니다!</H2>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <NextButton>
                    <Link to={"/profile2"}><FaArrowRight size="50px"/> <br/>다음 단계</Link>
                </NextButton>
            </div>

        </div>
    );
};


export default Profile1;