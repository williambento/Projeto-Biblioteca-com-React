import styled from "styled-components"
import logo from "../../images/logo.svg"

const ContainerLogo = styled.div`
    display: flex;
    font-size: 35px;
    color: #002f52;
`

const ImageLogo = styled.img`
    margin-right: 10px;
`

function Logo () {
    return (
        <ContainerLogo>
            <ImageLogo
                src={logo}
                alt="logo"
            />
            <p> <strong>Will </strong>Verso </p>
        </ContainerLogo>
    )
}

export default Logo