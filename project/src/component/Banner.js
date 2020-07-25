import React from "react";
import img1 from "../img/test1.jpeg";
import Category from "./Category";
import {Link, Route} from 'react-router-dom';


const Banner = () => {
    const currentArticle = 363
    //실제 글 갯수를 서버에서 받아오기 전 임시로 사용할 변수. 구현하고 나면 지우자.

    return (
        <div>
            <div>
                <Link to="/"><img src={img1}/></Link>
            </div>
            <div>
                <Category text="카테고리1" />
                <Category text="카테고리2" />
                <Category text="카테고리3" />
                <Category text="카테고리4" />
                <Category text="카테고리5" />
            </div>
        </div>
    );
}

// 헤더 밑, 큰 이미지와 함께 카테고리도 들어간다.

export default Banner;