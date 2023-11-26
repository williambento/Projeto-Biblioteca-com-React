import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import IconesHeader from "../IconesHeader"
import styled from "styled-components"

const ContainerHeader = styled.header`
    max-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

function Header() {
    return (
        <ContainerHeader>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </ContainerHeader>
    )
}

export default Header