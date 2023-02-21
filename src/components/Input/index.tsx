import { Container, Label, TextInput } from "./styles";

type Props = {
    label: string;
    numberOfLines: number;
}

export function Input({ label, numberOfLines }: Props) {
    return (
        <Container>
            <Label>{label}</Label>
            <TextInput numberOfLines={numberOfLines} />
        </Container>
    )
}