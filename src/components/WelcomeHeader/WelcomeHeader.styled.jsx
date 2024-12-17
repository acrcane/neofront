import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 0 30px;
    background-color: var(--secondary-color-dark-violet);
`;
export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
`;
export const LinkNav = styled(NavLink)`
    background-color: transparent;
`;
export const Logo = styled.img`
    width: 52px;
`;
export const SignInImg = styled.svg`
    width: 45px;
    height: 45px;
    fill: var(--primary-color-white);
`;
