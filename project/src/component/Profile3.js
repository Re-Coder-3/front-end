import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-left: 30%;
`;

const ContentDiv = styled.div`
  position: absolute;
  width: 100%;
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
  display: inline-block;
  width: 10%;
  margin-left: 15%;
  float: left;
`;
const ImageSection = styled.div`
  display: inline-block;
  width: 30%;
  margin-top: 4%;
  margin-left: 30%;
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
  border: 1px solid #ffffff;
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
    <Wrapper>
      <HeaderDiv>
        <H1>(선택)프로필을 채워주세요! 🤗</H1>
      </HeaderDiv>

      <ContentDiv>
        <InputSection>
          <ProfileImage>
            <input
              id="profilePic"
              type="file"
              onChange={onChangePicture}
            ></input>
            <img
              src={imgData}
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                overflow: "hidden" /* 넘친 부분 잘려서 보이지 않음 */,
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
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
          <OutsideImageBox type="file" />
        </ImageSection>
      </ContentDiv>
    </Wrapper>
  );
};

export default Profile3;
