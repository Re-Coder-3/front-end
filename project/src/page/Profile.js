import React, {useState} from 'react';
import styled from "styled-components";
import Join from "../component/Join";
import Profile1 from "../component/Profile1";
import Profile2 from "../component/Profile2";
import profile from "../img/profile.png";

const Section1 = styled.div`
  border: 0px;
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
`


const Profile = () => {
    return(
        <div>
            <Section1>
                <Join></Join>
                <br /><br /><br />
                <Profile1></Profile1>
                <br /><br /><br />
                <Profile2></Profile2>
            </Section1>
        </div>
    );
};

export default Profile;