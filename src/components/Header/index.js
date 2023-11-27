import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import IconesHeader from "../IconesHeader"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerHeader = styled.header`
    max-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

function Header() {
    return (
        <ContainerHeader>
            <StyledLink to={`/`}>
                <Logo/>
            </StyledLink>
            <OpcoesHeader/>
            <IconesHeader/>
        </ContainerHeader>
    )
}

export default Header