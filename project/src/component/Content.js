import React from "react";

const Content = ({title, tags}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{tags}</div>
        </div>
    );
}

// 메인화면 중간에 들어가는 콘텐츠 하나하나.

export default Content;