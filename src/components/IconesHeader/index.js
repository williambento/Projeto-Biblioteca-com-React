import perfil from "../../images/perfil.svg"
import sacola from "../../images/sacola.svg"
import styled from "styled-components"

const icones = [perfil, sacola]

const ContainerIcones = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icone = styled.img`
    padding: 0px 20px;
    cursor: pointer;
`

function IconesHeader() {
    return (
        <ContainerIcones>
            {
                icones.map( (icone) => (
                    <Icone src={icone} alt="icone"/>
                ))
            }
        </ContainerIcones>
    )
}

export default IconesHeader