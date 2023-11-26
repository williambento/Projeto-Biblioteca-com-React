import styled from "styled-components";
import { Titulo } from "../Titulo";
import livro from "../../images/livro2.png"

export default function LivroPerfil ({titulo, descricao}) {

    const ContainerLivroPerfil = styled.div`
        heigth: 250px;
        width: 400px;
        border: 4px solid #c9c7c9;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-bottom: 20px;
    `

    const Texto = styled.div`
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
    `

    const ImageRecomen = styled.div`
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
    `

    const Descricao = styled.p`
        width: 200px;
    `

    const Botao = styled.button`
        border: none;
        background-color: ${props => props.colorTexto || 'red'};
        color: #fff;
    `

    return (
        <ContainerLivroPerfil>
            <Texto>
                <Titulo> {titulo} </Titulo>
                <Descricao> {descricao} </Descricao>
            </Texto>
            <ImageRecomen>
                <img src={livro} alt="indicacao"></img>
                <Botao> Saiba Mais </Botao>
            </ImageRecomen>
        </ContainerLivroPerfil>
    )
}