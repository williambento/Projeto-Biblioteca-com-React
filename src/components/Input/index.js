import styled from "styled-components";

const Input = styled.input`
    min-width: 400px;
    min-height: 40px;
    border-radius: 20px;
    border-color: #fff;
    text-align: center;
    outline: none; //remove contorno do input
    font-size: 16px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0);

    &::placeholder {
        text-align: center;
        color: #fff;
        font-size: 16px;
    }
`

export default Input