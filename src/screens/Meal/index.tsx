import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { mealRemoveByDTO } from "@storage/meal/mealRemoveByName";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

import { Button } from "@components/Button";
import { Header } from "@components/Header";

import {
    Body,
    ButtonsContainer,
    Container,
    DateAndTimeInfo,
    DateAndTimeTitle,
    Description,
    Name,
    Status,
    Tag,
    TagText
} from "./styles";

type RouteParams = {
    meal: MealStorageDTO;
}

export function Meal() {

    const route = useRoute();

    const { meal } = route.params as RouteParams;
    const { name, description, date, time, inDiet } = meal;

    const navigation = useNavigation();

    async function mealRemove() {
        try {
            await mealRemoveByDTO(meal);
            navigation.navigate('home');
        } catch (error) {
            console.log(error);
            Alert.alert('Remover a refeição', 'Não foi possível remover a refeição.');
        }
    }

    function handleRemoveMeal() {
        Alert.alert(
            'Remover',
            'Deseja remover a refeição?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => mealRemove() }
            ]
        )
    }

    return (
        <Container inDiet={inDiet}>

            <Header title="Refeição" />

            <Body>
                <Name>{name}</Name>

                <Description>{description}</Description>

                <DateAndTimeTitle>Data e hora</DateAndTimeTitle>

                <DateAndTimeInfo>{date} às {time}</DateAndTimeInfo>

                <Tag>
                    <Status inDiet={inDiet} />
                    <TagText>{
                        inDiet ? "dentro da dieta" : "fora da dieta"
                    }</TagText>
                </Tag>

                <ButtonsContainer>
                    <Button
                        icon="pencil"
                        title="Editar refeição"
                    />
                    <Button
                        icon="trash"
                        title="Excluir refeição"
                        type="SECONDARY"
                        onPress={handleRemoveMeal}
                    />
                </ButtonsContainer>
            </Body>
        </Container>
    )
}