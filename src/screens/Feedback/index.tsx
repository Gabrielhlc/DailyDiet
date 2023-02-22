import { Container, Illustration, Subtitle, Title, TitleTypeStyleProps } from "./styles";

type Props = {
    type?: TitleTypeStyleProps;
}

import illustration1 from "@assets/Illustration1.png"
import illustration2 from "@assets/Illustration2.png"
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Feedback({ type = 'PRIMARY' }: Props) {

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Title type={type}>
                {type === 'PRIMARY' ? "Continue assim!" : "Que pena!"}
            </Title>
            <Subtitle>
                {type === 'PRIMARY' ?
                    ("Você continua dentro da dieta. Muito bem!") :
                    ("Você saiu da dieta dessa vez, mas continue se esforçando e não desista!")}
            </Subtitle>

            <Illustration source={(type === 'PRIMARY' ? illustration1 : illustration2)} />

            <Button
                title="Ir para a página inicial"
                onPress={handleHome}
            />
        </Container>
    )
}