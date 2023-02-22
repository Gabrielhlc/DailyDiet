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

            {numberOfLines === 1 ?
                <TextInput numberOfLines={numberOfLines} {...rest} />
                :
                <TextInput numberOfLines={numberOfLines} {...rest} textAlignVertical={'top'} />
            }


            {(error && touched) && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}