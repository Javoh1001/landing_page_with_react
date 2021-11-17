import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/bg-image.png';

const Section = styled.div`
    background-image:url(${BgImg});
    height:100vh;
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;
    position:relative;
    top:80px;
`
const Content = styled.div`
    width:100%;
    height:100px;

`
const Left = styled.div`
    padding-left:220px;
    padding-top:142px;

`
const Title = styled.p`
    font-size:55px;
    color:#04050a;
    font-weight:400;
`
const Description = styled.p`
    width:472px;
    font-size:20px;
    color:#9ea0ac;
    line-height:30px;
    margin-top:58px;
`
const Button = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    border-radius:18px;
    margin-top:58px;
    width:371px;
    height:71px;
    cursor:pointer;
    background:linear-gradient(90deg,#0546d6, #3f89fc);
    box-shadow: 0 15px; 14px rgba(0 42 177/12%);
    font-size:20px;
    color:#fff;
`

const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 Free Stacks <br/> valued up $1894!
                    </Title>
                    <Description>
                        Open and fanda brokerage account with $100 or more and you will
                        have a chance or claiming stocks link 
                        <span>GOOG, FB, SBUX</span>  and more
                    </Description>
                    <Button href="https://kun.uz">
                        <span>Claim your free stacks now</span>
                    </Button>
                </Left>
            </Content>
        </Section>
    )
}

export default Hero
