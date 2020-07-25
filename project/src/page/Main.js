import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import ContentContainer from "../component/ContentContainer";

const ContentContainer =styled.div``

const Main = () => {
    const name = "김아영"
    // 서버에서 받아오기 전 임시로 쓰는 변수.
    const recommend = name + "님을 위한 추천"
    // 첫번째 컴포넌트에 들어갈 텍스트. 어디 둘지 몰라서 여기 둡니다..
    const sampleContentText = [
        {
            title: "제목 칸 무료 타투...",
            tags: ["#미용", "#타투", "#서울"]
        }, {
            title:"이렇게 구현해놨는데",
            tags: ["#IT", "#노동", "#서울"]
        }, {
            title: "서버측에서 다르게",
            tags: ["#IT", "#서울"]
        }, {
            title: "주면 어떡하지",
            tags: ["#IT", "#부산"]
        }]
    // content 컴포넌트에 담을 데이터 예시. 서버에서 주면 그걸로 교체한다.

    return (
        <div>
            <Header/>
            <Banner/>
            <div className="mainContents">
                <ContentContainer title={recommend} moreText="관심 분야 수정하기" contentText={sampleContentText} />
                <ContentContainer title="실시간 인기 모집" moreText="더보기" contentText={sampleContentText}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;