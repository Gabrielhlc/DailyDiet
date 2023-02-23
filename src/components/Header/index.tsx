import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title?: string;
}

export function Header({ title = '', ...rest }: Props) {

    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('home')
    }
    return (

        <Container>
            <BackButton {...rest} onPress={handleGoHome}>
                <BackIcon />
            </BackButton>

            {title && <Title>{title}</Title>}
        </Container>
    )
}