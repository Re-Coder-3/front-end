import React, { useCallback, useState } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  padding-top: 5%;
  padding-left: 40%;
`;

const InputDiv = styled.div`
  padding-top: 3%;
  padding-left: 35%;
`;

const H1 = styled.h1`
  font-family: Kohinoor Gujarati;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 72px;
  color: #353535;
`;

const Inputul = styled.input`
  font-size: 18px;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid #f04244;
  background: none;
`;

const Inputbox = styled.input`
  font-size: 18px;
  margin-left: 3%;
  border-top: 1px solid #f04e44;
  border-left: 1px solid #f04e44;
  border-bottom: 1px solid #ffe143;
  border-right: 1px solid #ffe143;
  border-radius: 10px;
  background: none;
  width: 13%;
  height: 5%;
`;

const H2 = styled.h1`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  margin: 2%;
  color: black;
`;

const ProButton = styled.button`
  margin-left: 45%;
  padding-top: 3%;
  background: none;
  border: 0px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-decoration-line: underline;
  color: #5b5b5b;
`;

const H3 = styled.h1`
  position: absolute;
  padding-top: 2%;
  margin-left: 35%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #585858;
`;

const Profile2 = () => {
  const [name, setName] = useState();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");

  const myName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const myYear = useCallback((e) => {
    setYear(e.target.value);
  }, []);
  const myMonth = useCallback((e) => {
    setMonth(e.target.value);
  }, []);
  const myDay = useCallback((e) => {
    setDay(e.target.value);
  }, []);
  const myLocation = useCallback((e) => {
    setLocation(e.target.value);
  }, []);

  let check = React.createElement("input", { type: "checkbox", value: false });

  return (
    <div>
      <HeaderDiv>
        <H1>거의 다 됐어요! 🤗</H1>
      </HeaderDiv>

      <InputDiv>
        <H2>프로필 이름을 입력해주세요.</H2>
        <Inputul
          type="text"
          size="40"
          placeholder="닉네임 또는 성함을 입력해주세요."
          onChange={myName}
        />
        <H2>생년월일을 입력해주세요.</H2>
        <Inputbox
          name="year"
          type="text"
          maxLength="4"
          placeholder="년(4자)"
          onChange={myYear}
        />
        <Inputbox
          name="month"
          type="text"
          maxLength="2"
          placeholder="월"
          onChange={myMonth}
        />
        <Inputbox
          name="day"
          type="text"
          maxLength="2"
          placeholder="일"
          onChange={myDay}
        />

        <H2>위치를 설정해주세요.</H2>
        <Inputul
          type="text"
          size="40"
          placeholder="구까지 주활동지 주소 입력해주세요."
          onChange={myLocation}
        />
      </InputDiv>

      <ProButton>혹시 프로세요...?</ProButton>
      <H3>{check}이벤트 등 프로모션 알림 메일 받을래요?</H3>
    </div>
  );
};

export default Profile2;
