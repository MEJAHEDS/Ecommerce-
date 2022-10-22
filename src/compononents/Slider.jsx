
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
/*background-color:coral;*/
position:relative;
`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7; 
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left"&&"10px"};
right:${props=>props.direction==="right"&&"10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
`;
const Wrapper = styled.div`
height:100%;`
const Slide = styled.div`
width:100vw;
hieght:100vh; 
display:flex;
align-items:center;

`
const ImgContainer = styled.div`
  height:100%
  flex:1;
  
`
const Image = styled.img`
height:600px`
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;`

const Title= styled.h1``
const Desc= styled.p``
const Button= styled.button``


export const Slider = () => {
  return (
   <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide>
        <ImgContainer>
            <Image src='https://img01.ztat.net/article/spp-media-p1/128b362c885a45668b8f6bc135e39a80/0918f516e5c44e3d8c91c0ad4ea40860.jpg'/>
        </ImgContainer>
        <InfoContainer>
          <Title>SUMMER SAL</Title>
          <Desc>DON't COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
     </Arrow>
   </Container>
  )
}
export default Slider
