import { Container, RadioButtonTypeStyleProps, Status, Title } from "./styles";

type Props = {
    type?: RadioButtonTypeStyleProps;
    title: string;
}

export function RadioButton({ type = 'PRIMARY', title }: Props) {
    return (
        <Container type={type}>
            <Status type={type} />
            <Title>{title}</Title>
        </Container>
    )
}