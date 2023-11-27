import styled from "styled-components"
import { Link } from "react-router-dom"

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const ContainerOpcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Opcao = styled.li`
    padding: 0px 8px;
    font-size: 15px;
    cursor: pointer;
    color: #002f52;
    min-width: 120px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

function OpcoesHeader() {
    return (
        <ContainerOpcoes>
            {
                opcoes.map( (opcao) => (
                    <StyledLink to={`/${opcao.toLowerCase()}`}> <Opcao> <p> {opcao} </p> </Opcao> </StyledLink>
                ))
            }
        </ContainerOpcoes>
    )
}

export default OpcoesHeader