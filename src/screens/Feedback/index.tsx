import { Container, Illustration, Description, Title, isInDietProps } from "./styles";


import illustration1 from "@assets/Illustration1.png"
import illustration2 from "@assets/Illustration2.png"
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
    inDiet: isInDietProps;
}

export function Feedback() {

    const route = useRoute();
    const { inDiet } = route.params as RouteParams

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Title inDiet={inDiet}>
                {inDiet === 'yes' ? "Continue assim!" : "Que pena!"}
            </Title>
            <Description>
                {inDiet === 'yes' ?
                    ('Você continua dentro da dieta, Muito bem!') :
                    ('Você saiu da dieta dessa vez, mas continue se esforçando e não desista!')}
            </Description>

            <Illustration source={(inDiet === 'yes' ? illustration1 : illustration2)} />

            <Button
                title="Ir para a página inicial"
                onPress={handleHome}
            />
        </Container>
    )
}