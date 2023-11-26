import styled from "styled-components"

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

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

function OpcoesHeader() {
    return (
        <ContainerOpcoes>
            {
                opcoes.map( (opcao) => (
                    <Opcao> <p> {opcao} </p> </Opcao>
                ))
            }
        </ContainerOpcoes>
    )
}

export default OpcoesHeader