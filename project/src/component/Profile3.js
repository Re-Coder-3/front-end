import React, { useCallback, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const HeaderDiv = styled.div`
  padding-top: 5%;
  padding-left: 30%;
`;

const ContentDiv = styled.div`
  position: absolute;
`;

const H1 = styled.h1`
  font-family: Kohinoor Gujarati;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 72px;
  color: #ffffff;
`;

const Input = styled.input`
  width: 400px;
  margin-bottom: 30%;
  border: none;
  border-bottom: 1.5px solid #ffffff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  background: none;
  ::placeholder {
    color: white;
  }
  color: #eeeeee;
`;

const InputSection = styled.div`
  width: 10%;
  margin-left: 15%;
  float: left;
`;
const ImageSection = styled.div`
  width: 50%;
  margin-top: 4%;
  margin-left: 25%;
  float: left;
`;

const ProfileImage = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 40% 0% 40% 85%;
`;

const OutsideImageBox = styled.input`
  width: 120px;
  height: 120px;
  border: 5px solid #ffffff;
  background: none;
`;

const Profile3 = () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <HeaderDiv>
        <H1>(선택)프로필을 채워주세요! 🤗</H1>
      </HeaderDiv>

      <ContentDiv>
        <InputSection>
          <ProfileImage>
            <input id="profilePic" type="file" onChange={onChangePicture} />
            <img
              src={imgData}
              style={{
                height: 120,
                width: 120,
                borderRadius: 50,
                // overflow: "hidden",
              }}
            />
          </ProfileImage>

          <Input type="text" size="60" placeholder="이력을 입력해주세요." />
          <Input type="text" size="60" placeholder="학력을 입력해주세요." />
          <Input type="text" size="60" placeholder="간단한 소개를 해주세요." />
        </InputSection>

        <ImageSection>
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <br />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <br />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
        </ImageSection>
      </ContentDiv>
    </div>
  );
};

export default Profile3;
