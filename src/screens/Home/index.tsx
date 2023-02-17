import { useEffect, useState } from "react";
import { FlatList, SectionList } from "react-native";

import groupBy from 'lodash/groupBy'
import { format } from 'date-fns'
import { pt } from "date-fns/locale";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Meal } from "@components/Meal";
import { Statistics } from "@components/Statistics";


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

    useEffect(() => {
        const groupedMeals = Object.values(
            groupBy(meals, (meal) => (meal.date.substring(0, 10)))
        )
        console.log(groupedMeals)
        var data: sectionListMeals[] = [];
        groupedMeals.map(d => {
            console.log(d[0])
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
            <Header />

            <Statistics />

            <NewMeal>
                <NewMealTitle>Refeições</NewMealTitle>
                <Button
                    icon="add"
                    title="Nova refeição"
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

            {/* <DayList>
                <DayListDate>12.08.22</DayListDate>
                <FlatList
                    data={meals}
                    keyExtractor={item => item.description}
                    renderItem={({ item }) => (
                        <Meal
                            hour={item.hour}
                            description={item.description}
                            status={item.status}
                        />
                    )}
                />
            </DayList> */}

        </Container>
    )
}