import React from 'react';
import Logos from '../assets/logo.svg';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

const NavbarContainer = styled.div`
    width:100%;
    height:80px;
    background-color:#fff;
    z-index:20;
    position:fixed;
    top:0;
`
const NavbarWrap = styled.div`
    width:1200px;
    height:100%;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:20;
    position:relative;
    // background-color:red;
`
const Nav = styled.div`
    flex:1;
    position:relative;
    padding-left:50px;
`
const SearchWrap = styled.div`
    right:235px;
    position:absolute;

`
const Input = styled.input`
    width:220px;
    height:36px;
    position:relative;
    box-sizing:border-box;
    background:rgba(179, 191,201,0.15);
    line-height:33px;
    padding-left:37px;
    border-radius:19px;
    border:none;
    color:#fff;
    box-shadow:0 0 10px 2px rgba(0,0,0,.2);
    &::placeholder{
        color:#333;
    }
    background:transparent;
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`
const Button = styled.div`
    width:110px;
    color:#fff;
    cursor:pointer;
    height:36px;
    font-size:16px;
    box-sizing:border-box;
    background:#007cff;
    text-align:center;
    line-height:36px;
    border-radius:21px;
    font-family:'verdana';
`
const NavLink = styled(Link)`
    color:#000;
    padding:0 15px;
    line-height:80px;
    font-weight:500;
    font-family:'verdana';
    text-decoration:none;
    font-size:16px;
`;
const Logo = styled.div`
    width:120px;
    height:22px;
    background:url(${Logos});
    background-repeat:no-repeat;
    background-size:100% 100%;
    cursor:pointer;
`



const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarWrap>
                    <Logo></Logo>
                    <Nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Market</NavLink>
                        <NavLink to="/">Trade</NavLink>
                        <NavLink to="/">Pricing</NavLink>
                        <NavLink to="/">Download</NavLink>
                        <NavLink to="/">Help</NavLink>
                    </Nav>
                    <SearchWrap>
                        <Input type="text" placeholder="Search" />
                    </SearchWrap>
                    <ButtonContainer>
                        <Button css={'color:#037cff; background-color:#fff;'}>Sign Up</Button>
                        <Button>Sign In</Button>
                    </ButtonContainer>
                </NavbarWrap>
            </NavbarContainer>
        </>
    )
}

export default Navbar
