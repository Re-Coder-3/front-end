import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import styled from "styled-components";
import profileImage from "../img/profile3.png";

const LaterButton = styled.button`
width:100px;
height:100px;
color: #ffffff;
margin-left:80%;
background:none;
border:none;
A {text-decoration: none; color: white;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }
`;

const NextButton = styled.button`
margin-left:80%;
width:100px;
height:100px;
color:gray;
border:0px;
background:none;
A {text-decoration: none; color: white;} 
A:visited { text-decoration: none; }
A:hover { text-decoration: none; }
A:focus { text-decoration: none; }
A:hover, a:active { text-decoration: none; }

`;

const Input = styled.input`
width: 450px;
height: 30px;
border: none;
border-bottom: 1.5px solid #ffffff ;
font-family: Noto Sans KR;
font-style: normal;
font-weight: normal;
font-size: 20px;
background: none;
::placeholder {
  color: white;
}
color: #EEEEEE;
`;

const Section = styled.div`
  margin: 0px;
  border: 0px;
  background-image: url(${profileImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
left:10%;
`;

const InputSection = styled.div`
margin-left: 15%;
margin-right: 15%;
border:none;
float:left;
`;
const ImageSection = styled.div`
margin:5%;
border:none;

`;




const H1 = styled.h1`
color:white;
margin-left: 40%;
`;

const OutsideImageBox = styled.input`
right:10%;
width:170px;
height:170px;
border:5px solid #ffffff ;
background:none;
`

const ProfileImage = styled.button`
height: 200px;
width: 200px;
background-color: #ffffff;
border:none;
border-radius: 50%;
display: inline-block;
margin-left:35%;

`;


const Profile3 = () => {

    return(
        <Section>
            <div>
                <LaterButton>
                    <Link to={"/"}>다음에 하기</Link>
                </LaterButton>
                <H1>(선택)프로필을 채워주세요!  🤗</H1>
            </div>
            <br/><br/><br/><br/><br/>

            <Content>
                <InputSection>
                    <ProfileImage>
                        <input type = "file" name = "file_upload" />
                    </ProfileImage>
                    <br/>
                <Input
                    type="text"
                    size="60"
                    placeholder="이력을 입력해주세요."
                />
                <br/><br/><br/><br/><br/><br/>
                <Input
                    type="text"
                    size="60"
                    placeholder="학력을 입력해주세요."
                />
               <br/><br/><br/><br/><br/><br/>
                <Input
                    type="text"
                    size="60"
                    placeholder="간단한 소개를 해주세요. "
                />
                </InputSection>


                <ImageSection>
                <OutsideImageBox
                    type="img"
                />
                <OutsideImageBox
                    type="img"
                />
                <OutsideImageBox
                    type="img"
                />
                <br/>
                    <OutsideImageBox
                        type="img"
                    />
                    <OutsideImageBox
                        type="img"
                    />
                    <OutsideImageBox
                        type="img"
                    />
                    <br/>
                    <OutsideImageBox
                        type="img"
                    />
                    <OutsideImageBox
                        type="img"
                    />
                    <OutsideImageBox
                        type="img"
                    />
            </ImageSection>
            </Content>


            <div>
                <NextButton>
                    <Link to={"/"}><FaArrowRight size="50px"/> <br/>완료 하기</Link>
                </NextButton>
            </div>
        </Section>
    );
};

export default Profile3;