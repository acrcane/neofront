import styled from "styled-components";

export const FormAuth = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const Label = styled.label``;
export const Input = styled.input`
    width: 100%;
    height: 44px;
    border-radius: 15px;
    outline: none;
    padding: 10px 30px;
    border: none;
`;
export const Submit = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 15px;
    outline: none;
    background: linear-gradient(32deg, #e92d89 0%, #500f75 84%);
    background-size: 200% 200%;
    background-position: 100% 100%;
    transition: background-position 0.9s ease;
    color: var( --primary-color-white);
    &:hover {
        background: linear-gradient(32deg, #500f75 0%, #e92d89 84%);
    }
`;
