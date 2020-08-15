import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Content from "../component/Content";
import styled from "styled-components";
import { useQuery, gql } from '@apollo/client';

const Page = styled.div`
  width: 100%;
  padding: 64px 0 0 0;
`

const MainContents = styled.div`
  width:68vw;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ContentInnerWrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar{
  display:none;
  }
`

const ContentTitle = styled.div`
 font-size: 2vw;
 display: inline-block;
 margin-bottom: 1vw;
 font-weight: bold;
`
const ContentMore = styled.div`
  display: inline-block;
  font-size: 1.5vw;
  float: right;
  margin-top: 0.5vw;
`;

const CONTENT_QUERY = gql`
    query{
      findPost(args:{
        offset:0
        limit:5
        filter:{
          field:""
          operator:""
          value:""
        }
      }){
       rows{
        post_idx
        post_title
        image{
          image_url
        }
        hashtag{
          hashtag_name
        }
      }
    }
  }
`;

const Main = () => {
  const { data } = useQuery(CONTENT_QUERY);
  const [contentState, setContentState] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data.findPost.rows);
      setContentState(data.findPost.rows);
    }
    console.log(contentState);
    // setCategory(data);
  }, [data, contentState]);

  const name = "김아영";
  // 서버에서 받아오기 전 임시로 쓰는 변수.
  const recommend = name + "님을 위한 추천";
  // 첫번째 컴포넌트에 들어갈 텍스트. 어디 둘지 몰라서 여기 둡니다..

    return (
        <Page>
            <Banner/>
            <MainContents>
                <ContentWrapper>
                    <ContentTitle>{recommend}</ContentTitle>
                    <ContentMore>더보기></ContentMore><br/>
                    <ContentInnerWrapper>
                        {contentState &&
                    contentState.map((c) => (
                        <Content key={c.post_idx} title={c.post_title} tags={c.hashtag.hashtag_name} image={c.image.image_url}/>
                    ))}
                    </ContentInnerWrapper>
                </ContentWrapper>
                <ContentWrapper>
                    <ContentTitle>{recommend}</ContentTitle>
                    <ContentMore>더보기</ContentMore><br/>
                    <ContentInnerWrapper>
                        {data &&
                        data.findPost.rows.map((c) => (
                            <Content key={c.post_idx} title={c.post_title} tags={c.hashtag.hashtag_name} image={c.image.image_url}/>
                        ))}
                    </ContentInnerWrapper>
                </ContentWrapper>
            </MainContents>
            <Footer/>
        </Page>
    );
}

export default Main;
