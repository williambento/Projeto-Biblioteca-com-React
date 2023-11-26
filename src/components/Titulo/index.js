import styled from "styled-components";

export const Titulo = styled.h1`
    font-size: ${props => props.fontSize || '16px'};
    color: ${props => props.color || '#000000'};
    font-weigth: 200;
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props => props.merginBottom || '0px'}
`