import { useState, useEffect } from "react"
import Input from "../Input"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import { getLivros } from "../../servicos/livros"
import livroIMG from "../../images/livro.png"
import { postFavoritos } from "../../servicos/favoritos"

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
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])
 
    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function postFavorito(id){
        await postFavoritos(id)
        alert("livro adicionado aos favoritos")
    }

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
                    const resultadoPesquisa = livros.filter(livro => livro.titulo.includes(textoDigitado))
                    setLivroPesquisado(resultadoPesquisa)
                }}
            />
            <LivroContainer>
            {
                livroPesquisado.map( livro => (
                    <MostraLivro onClick={ () => postFavorito(livro.id)}>
                        <NomeLivro> {livro.titulo} </NomeLivro>
                        <ImagemLivro src={livroIMG} alt="livro" />
                    </MostraLivro>
                ))
            }
            </LivroContainer>
        </ContainerPesquisa>
    )
}

export default Pesquisa