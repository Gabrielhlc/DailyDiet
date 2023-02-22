import { TextInputProps } from 'react-native'
import { Container, ErrorMessage, Label, TextInput } from "./styles";

type Props = TextInputProps & {
    label: string;
    numberOfLines: number;
    error?: string;
    touched: undefined | boolean;
}

export function Input({ label, numberOfLines, error = '', touched, ...rest }: Props) {
    return (
        <Container>
            <Label>{label}</Label>

            <TextInput numberOfLines={numberOfLines} {...rest} />

            {(error && touched) && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}