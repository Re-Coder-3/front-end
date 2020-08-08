import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
`;

const Item = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  &:nth-child(2) {
    background-color: lightgrey;
  }
  &:nth-child(3) {
    background-color: lightblue;
  }
  &:nth-child(4) {
    background-color: lightcoral;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Wrapper>
      <Container ref={slideRef}>
        <Item>
          <Button onClick={nextSlide}>Click</Button>
        </Item>
        <Item>
          <Button onClick={nextSlide}>Click</Button>
        </Item>
        <Item>
          <Button onClick={nextSlide}>Click</Button>
        </Item>
      </Container>
    </Wrapper>
  );
};

export default Main;
