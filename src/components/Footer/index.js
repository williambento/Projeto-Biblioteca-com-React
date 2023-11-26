import styled from "styled-components";
import Logo from "../Logo";

const ContainerFooter = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Footer () {
    return (
        <ContainerFooter>
            <Logo
                colorTexto = "#ffff"
            />
        </ContainerFooter>
    )
}

export default Footer