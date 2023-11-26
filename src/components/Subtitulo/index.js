import styled from "styled-components";

export const SubTitulo = styled.h2`
    font-size: ${props => props.fontSize || '20px'};
    font-weigth: 200;
    color: ${props => props.colorH2 || '#00000'};
`