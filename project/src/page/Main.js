import React, {useEffect, useState} from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Content from "../component/Content";
import styled from "styled-components";
import { useQuery, gql } from '@apollo/client';


const MainContents = styled.div`
  width:75.5vw;
  margin-left: auto;
  margin-right: auto;
`

const ContentWrapper = styled.div`
  margin-top:5%;
  margin-bottom: 5%;
`

const ContentTitle = styled.div`
 font-size: 2.5vw;
 display: inline-block;
 margin-bottom: 1vw;
`

const ContentMore = styled.div`
  display: inline-block;
  font-size: 1.5vw;
  float:right;
  margin-top:0.5vw;
`

const CONTENT_QUERY = gql`
    query{
      findPost(args:{
        offset:0
        limit:4
        filter:{
          field:""
          operator:""
          value:""
        }
      }){
       rows{
        post_idx
        post_title
        hashtag{
          hashtag_name
        }
      } 
      }
    }
`

const Main = () => {

    const { loading, error, data } = useQuery(CONTENT_QUERY);
    const [contentState, setContentState] = useState([]);
    useEffect(() => {
        if (data.rows) {
            console.log(data.rows);
            setContentState(data.rows);
        }
        console.log(contentState);
        // setCategory(data);
    }, [data, contentState]);


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

    const contentList = (contenttext) => contenttext.map(text => <Content title={text.title} tags={text.tags} />);

    return (
        <div>
            <Header/>
            <Banner/>
            <MainContents>
                <ContentWrapper>
                    <ContentTitle>{recommend}</ContentTitle>
                    <ContentMore>더보기></ContentMore><br/>
                    {contentList(sampleContentText)}
                </ContentWrapper>
                <ContentWrapper>
                    <ContentTitle>{recommend}</ContentTitle>
                    <ContentMore>더보기</ContentMore><br/>
                    {contentList(sampleContentText)}
                </ContentWrapper>
            </MainContents>
            <Footer/>
        </div>
    );
}

export default Main;