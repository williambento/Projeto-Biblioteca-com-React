import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { deleteFavoritos, getFavoritos } from '../servicos/favoritos';
import livroImg from '../images/livro.png'

const ContainerApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(90deg, #002f52 35%, #0c75c6 100%);
  margin-top: -30px;
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  color: #ffff;
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   padding-top: 100px;
`

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos () {
    const favoritosAPI = await getFavoritos()
    setFavoritos(favoritosAPI)
  }

  async function deletarFavorito (id){
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert("livro deletado")
  }
  useEffect( () => {
    fetchFavoritos()
  }, [])

  return (
    <ContainerApp>
      <div>
        <Titulo
          color='#ffff'
          fontSize="36px"
        > Os livros favoritos são </Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} alt='livro'/>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </ContainerApp>
  );
}

export default Favoritos;
