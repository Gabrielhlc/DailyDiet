import { useState } from 'react'
import { FlatList } from "react-native";
import { Container, Date, Meal } from "./styles";

export function DayList() {
    const [meals, setMeals] = useState<string[]>([])
    return (
        <Container>
            <Date>12.08.22</Date>
            <FlatList
                data={meals}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Meal />
                )}
            />
        </Container>
    )
}