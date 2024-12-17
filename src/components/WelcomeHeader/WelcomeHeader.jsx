import React from 'react'
import { Header, Nav, LinkNav, Logo, SignInImg } from './WelcomeHeader.styled'
import logo from '../../icons/logo.png'
import icons from '../../icons/symbol-defs.svg'

const WelcomeHeader = () => {
  return (
    <Header>
        <Nav>
            <LinkNav to={'/'}><Logo src={logo}/></LinkNav>
            <LinkNav to={'/signin'}><SignInImg> <use href={`${icons}#icon-user`}></use></SignInImg></LinkNav>
        </Nav>
    </Header>
  )
}

export default WelcomeHeader
