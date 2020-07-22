import React from "react";
import Content from "./Content";

const ContentContainer = ({title, moreText, contentText}) => {
    const contentList = contentText.map(text => <Content title={text.title} tags={text.tags} />);
    return (
        <div>
            {title} {moreText}>
            {contentList}
        </div>
    );
}

//메인화면의 중간부분, Content 들을 담는 부분이다.

export default ContentContainer;