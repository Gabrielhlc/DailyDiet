import { CardTypeStyleProps, Container, Description, Number } from "./styles";

type Props = {
    type?: CardTypeStyleProps;
    number: string;
    description: string;
}

export function Card({ type = 'NEUTRAL', number, description }: Props) {
    return (
        <Container type={type}>
            <Number>{number}</Number>
            <Description>{description}</Description>
        </Container>
    )
}