import { TouchableOpacityProps } from "react-native";
import { Container, RadioButtonTypeStyleProps, Status, Title } from "./styles";

type Props = TouchableOpacityProps & {
    type?: RadioButtonTypeStyleProps;
    title: string;
    isActive?: boolean;
}

export function RadioButton({ type = 'PRIMARY', isActive = false, title, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            type={type}
            {...rest}>
            <Status
                isActive={isActive}
                type={type} />
            <Title>{title}</Title>
        </Container>
    )
}