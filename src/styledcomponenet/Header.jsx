import React from 'react'
import {Container} from "react-bootstrap"
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
    <Container fluaid>
        <Container>
         <Nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         </Nav>
        </Container>
        </Container>
        </HeaderContainer>
  )
}
const HeaderContainer=styled.header`
background:skyblue;
padding:30px;
`;
const Nav=styled.nav`
background:blue;
ul{
    padding:30px;
    list-style:none;
    display:flex;
    gap:50px;

}
`;
export default Header;