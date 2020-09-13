import React, { useState } from "react";
import styled from "styled-components";
import { AddImg } from "../component/Icons";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  float: left;
`;

const HeaderDiv = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-left: 40%;
`;

const ContentDiv = styled.div`
  position: absolute;
  width: 100%;
`;

const H1 = styled.h1`
  font-family: Kohinoor Gujarati;
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;
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
  font-size: 1.2rem;
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
  width: 40%;
  height: 40%;
  border-radius: 50%;
  margin: 30% 0% 30% 85%;
`;

const OutsideImageBox = styled.input`
  width: 120px;
  height: 120px;
  border: 1px solid #ffffff;
  background: none;
`;

const Profile3 = () => {
  const [career, setCareer] = useState("");
  const [education, setEducation] = useState("");
  const [profile, setProfile] = useState("");

  const careerData = (e) => {
    setCareer(e.target.value);
  };

  const educationData = (e) => {
    setEducation(e.target.value);
  };

  const profileData = (e) => {
    setProfile(e.target.value);
  };

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
      <Wrapper>
        <HeaderDiv>
          <H1>(선택)프로필을 채워주세요! 🤗</H1>
        </HeaderDiv>

        <ContentDiv>
          <InputSection>
            <ProfileImage>
              <form
                action="http://ec2-52-79-180-113.ap-northeast-2.compute.amazonaws.com:5000/api/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  type="file"
                  name="image"
                  accept="image/*"
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
                <input type="submit"></input>
              </form>
            </ProfileImage>

            <Input
              type="text"
              size="60"
              placeholder="이력을 입력해주세요."
              onClick={careerData}
            />
            <Input
              type="text"
              size="60"
              placeholder="학력을 입력해주세요."
              onClick={educationData}
            />
            <Input
              type="text"
              size="60"
              placeholder="간단한 소개를 해주세요."
              onClick={profileData}
            />
          </InputSection>
          <AddImg />
          <ImageSection>
            <form
              action="http://ec2-52-79-180-113.ap-northeast-2.compute.amazonaws.com:5000/api/upload"
              method="post"
              enctype="multipart/form-data"
            >
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <OutsideImageBox type="file" name="image" accept="image/*" />
              <input type="submit"></input>
            </form>
          </ImageSection>
        </ContentDiv>
      </Wrapper>
    </div>
  );
};

export default Profile3;

// const LIKE_CATEGORY = gql`
//     mutation updateUserProfile($user_like_category: String) {
//       updateUserProfile(user_like_category: $user_like_category) {
//         error
//         status
//       }
//     }
//   `;

//   const [updateUserProfile] = useMutation(LIKE_CATEGORY, {
//     variables: {
//       user_like_categry: category,
//     },
//   });

//   //페이지 넘어갈 때
//   const SaveData = async (event) => {
//     event.preventDefault();
//     const result = await updateUserProfile();
//     if (result) {
//       const {
//         data: {
//           updateUserProfile: { status, error },
//         },
//       } = result;
//       if (status === 200) {
//         console.log("관심분야 설정 완료");
//       }
//     }
//   };
