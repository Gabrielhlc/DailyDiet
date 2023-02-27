import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import groupBy from 'lodash/groupBy'
import { format } from 'date-fns'
import { pt } from "date-fns/locale";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { HomeHeader } from "@components/HomeHeader";
import { DietPercentage } from "@components/DietPercentage";
import { Loading } from "@components/Loading";

import { Container, DayList, DayListDate, NewMeal, NewMealTitle } from "./styles";

type sectionListMeals = {
    title: string;
    data: MealStorageDTO[]
}

export function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState<MealStorageDTO[]>([]);
    const [sectionListMeals, setSectionListMeals] = useState<sectionListMeals[]>([]);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('new', { mealParams: { name: '', description: '', date: '', time: '', inDiet: false } });
    }

    async function fetchMeals() {
        try {
            setIsLoading(true)

            const data = await mealsGetAll();
            setMeals(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    function handleOpenMeal(meal: MealStorageDTO) {
        navigation.navigate('meal', { meal })
    }

    useFocusEffect(useCallback(() => {
        fetchMeals();
        const groupedMeals = Object.values(
            groupBy(meals, (meal) => (meal.date.substring(0, 10)))
        )
        var data: sectionListMeals[] = [];
        groupedMeals.map(d => {
            const parts: string[] = d[0].date.split("/");
            const day: number = parseInt(parts[0]);
            const month: number = parseInt(parts[1]) - 1;
            const year: number = parseInt(parts[2]);

            let section = {
                title: format(new Date(year, month, day), 'PPP', { locale: pt }),
                data: [...d]
            };
            data.push(section);
        });
        setSectionListMeals(data.reverse())
    }, []));

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

                {isLoading ? <Loading /> :

                    <SectionList
                        sections={sectionListMeals}
                        keyExtractor={item => item.description}
                        renderItem={({ item }) => (
                            <Meal
                                time={item.time}
                                name={item.name}
                                inDiet={item.inDiet}
                                onPress={() => handleOpenMeal(item)}
                            />
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <DayListDate>{title}</DayListDate>
                        )}
                    />}
            </DayList>

        </Container>
    )
}