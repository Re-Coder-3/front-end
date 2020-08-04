import React, {useCallback, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import styled from "styled-components";

const Join = () => {
    return(
    <div>
        <input
            type="text"
            size="40"
            placeholder="이메일을 입력해주세요."
        />
        <br/>
        <input
            type="text"
            size="40"
            placeholder="아이디를 입력해주세요."
        />
        <br/>
        <input
            type="text"
            size="40"
            placeholder="비밀번호를 입력해주세요."
        />
    </div>
    );
}

export default Join;