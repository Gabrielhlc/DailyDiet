import { TouchableOpacityProps } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import { ButtonIcon } from "@components/ButtonIcon";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            {icon === undefined ? "" : <ButtonIcon icon={icon} type={type} />}

            <Title type={type}> {title}</Title>
        </Container>
    )
}