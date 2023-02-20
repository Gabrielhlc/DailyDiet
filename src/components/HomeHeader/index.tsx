import { Container, Logo } from "./styles";

import logoImg from '@assets/logo.png'

export function HomeHeader() {
    return (

        <Container>
            <Logo source={logoImg} />
        </Container>
    )
}