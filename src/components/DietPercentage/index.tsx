import { Arrow, Button, Container, Subtitle, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
    showArrow?: boolean;
}

export function DietPercentage({ showArrow = false, ...rest }: Props) {

    const navigation = useNavigation();

    function handleStatistics() {
        navigation.navigate('statistics')
    }

    return (
        <Container>

            {showArrow && (
                <Button {...rest} onPress={handleStatistics}>
                    <Arrow />
                </Button>
            )}
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}