import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

import { Ionicons } from '@expo/vector-icons'

type Props = {
    icon?: keyof typeof Ionicons.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY' }: Props) {
    return (
        <Container>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}