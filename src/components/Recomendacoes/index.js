import styled from "styled-components";
import { Titulo } from "../Titulo";
import { DataLivros } from "./DataLivros";
import { SubTitulo } from "../Subtitulo";
import LivroPerfil from "../LivroPerfil";

const ContainerRecomendacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    heigth: 100vh;
    flex-direction: column;
    background-color: #fff;
`

const MostraRecomendacao = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

const LivrosRecomendados = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px; /* Ajuste conforme necessário */
    margin-bottom: 40px;
`

function Recomendacao() {

    return(
        <ContainerRecomendacao>
            <Titulo
                fontSize = '32px'
                color = '#000000'
                marginTop = '100px'
            > Recomendação de Leitura </Titulo>
            <LivrosRecomendados>
            {
                DataLivros.map( livro => 
                    <MostraRecomendacao>
                        <SubTitulo
                            fontSize = "16px"
                            colorH2 = "#00000"
                        > {livro.nome} </SubTitulo>
                        <img src={livro.src} alt="img"></img>
                    </MostraRecomendacao>
                )
            }
            </LivrosRecomendados>
            <LivroPerfil
                titulo = "Mais lido essa semana!"
                descricao = "Python para negocios!"
            />
        </ContainerRecomendacao>
    )
}

export default Recomendacao