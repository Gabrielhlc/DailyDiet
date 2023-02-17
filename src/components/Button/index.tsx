import { ButtonIcon } from "@components/ButtonIcon";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <ButtonIcon icon={icon} type={type} />
            <Title> {title}</Title>
        </Container>
    )
}