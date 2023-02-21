import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container } from "./styles";

type Props = TouchableOpacityProps & {}

export function Header({ ...rest }: Props) {

    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('home')
    }
    return (

        <Container>
            <BackButton {...rest} onPress={handleGoHome}>
                <BackIcon />
            </BackButton>
        </Container>
    )
}