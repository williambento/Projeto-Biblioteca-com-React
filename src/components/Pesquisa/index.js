import { useState } from "react"
import Input from "../Input"
import { DataLivros } from "./DataLivros"
import styled from "styled-components"
import { Titulo } from "../Titulo"

const ContainerPesquisa = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const SubTitulo = styled.p`
    font-size: 20px;
    font-weigth: 200;
    color: #fff;
    margin-bottom: 30px;
`

const LivroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px; /* Ajuste conforme necessário */
    margin-bottom: 40px;
`

const MostraLivro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

const NomeLivro = styled.p`
    color: #fff;
`

const ImagemLivro = styled.img`
    margin-bottom: 50px;
`

function Pesquisa() {

    const [livroPesquisado, setLivroPesquisado] = useState([])

    console.log(livroPesquisado)

    return (
        <ContainerPesquisa>
            <Titulo
                fontSize = '36px'
                color = '#fff'
                marginBottom = '50px'
            > Encontre algo para ler... </Titulo>
            <SubTitulo> Busque na nossa estante! </SubTitulo>
            <Input
                placeholder="Titulo do livro..."
                onBlur={ evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = DataLivros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivroPesquisado(resultadoPesquisa)
                }}
            />
            <LivroContainer>
            {
                livroPesquisado.map( livro => (
                    <MostraLivro>
                        <NomeLivro> {livro.nome} </NomeLivro>
                        <ImagemLivro src={livro.src} alt="livro" />
                    </MostraLivro>
                ))
            }
            </LivroContainer>
        </ContainerPesquisa>
    )
}

export default Pesquisa