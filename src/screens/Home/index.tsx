import { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import groupBy from 'lodash/groupBy'
import { format } from 'date-fns'
import { pt } from "date-fns/locale";

import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { HomeHeader } from "@components/HomeHeader";
import { DietPercentage } from "@components/DietPercentage";

import { Container, DayList, DayListDate, NewMeal, NewMealTitle } from "./styles";

export type Meal = {
    date: string;
    hour: string;
    description: string;
    status: boolean;
}

type sectionListMeals = {
    title: string;
    data: Meal[]
}


export function Home() {
    const [meals, setMeals] = useState<Meal[]>([{ date: Date(), hour: '20:30', description: 'Salada cesar com frango grelhado', status: true }, { date: 'Fri Feb 18 2023 18:15:48 GMT-0300 (-03)', hour: '22:30', description: 'Vitamina de banana com Whey protein', status: true }]);
    const [sectionListMeals, setSectionListMeals] = useState<sectionListMeals[]>([]);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('new');
    }

    useEffect(() => {
        const groupedMeals = Object.values(
            groupBy(meals, (meal) => (meal.date.substring(0, 10)))
        )
        var data: sectionListMeals[] = [];
        groupedMeals.map(d => {
            let section = {
                title: format(new Date(d[0].date), 'PPP', { locale: pt }),
                data: [...d]
            };
            data.push(section);
        });
        setSectionListMeals(data)
    }, [meals])

    return (
        <Container>
            <HomeHeader />

            <DietPercentage showArrow />

            <NewMeal>
                <NewMealTitle>Refeições</NewMealTitle>
                <Button
                    icon="add"
                    title="Nova refeição"
                    onPress={handleNewMeal}
                />
            </NewMeal>

            <DayList>
                <SectionList
                    sections={sectionListMeals}
                    keyExtractor={item => item.description}
                    renderItem={({ item }) => (
                        <Meal
                            hour={item.hour}
                            description={item.description}
                            status={item.status}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <DayListDate>{title}</DayListDate>
                    )}
                />
            </DayList>

        </Container>
    )
}