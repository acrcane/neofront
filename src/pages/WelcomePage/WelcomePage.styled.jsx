import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color-black);
`;

export const Main = styled.main`
    width: 100%;
    height: auto;
    background-color: transparent;
    padding: 0 30px;
`;
export const Title = styled.h1`
    margin: 10px 0;
    color: var(--primary-color-white);
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 3em;
    line-height: 0.9;
    text-align: center;
`;

export const List = styled.ul`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Icon = styled.svg`
    max-width: 32px;
    max-height: 32px;
    min-width: 31px;
    min-height: 31px;
`;
export const Text = styled.span`
    color: var(--primary-color-white);
`;

export const Button = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
    width: 100%;
    height: 60px;
    border-radius: 15px;
    background: linear-gradient(32deg, #e92d89 0%, #500f75 84%);
    background-size: 200% 200%;
    background-position: 100% 100%;
    transition: background-position 0.9s ease;
    &:hover {
        background: linear-gradient(32deg, #500f75 0%, #e92d89 84%);
    }
`;
export const BtnText = styled.span`
    color: var(--primary-color-white);
    background-color: transparent;
`;
