import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { statisticsGetStats, Stats } from "@utils/statisticsGetStats";

import { Card } from "@components/Card";
import { DietPercentage } from "@components/DietPercentage";
import { Header } from "@components/Header";

import { Container, Body, StatisticsHeader, Title, DataRow } from "./styles";

export function Statistics() {
    const [stats, setStats] = useState<Stats>(Object);

    async function fetchStats() {
        try {
            const stats = await statisticsGetStats();
            setStats(stats)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchStats();
    }, []));

    return (
        <Container percentage={stats.percentage}>

            <Header />
            <StatisticsHeader>
                <DietPercentage />
            </StatisticsHeader>

            <Body>
                <Title>
                    Estatísticas gerais
                </Title>

                <DataRow>
                    <Card
                        number={stats.inDietStreak}
                        description="melhor sequência de pratos dentro da dieta"
                    />
                </DataRow>

                <DataRow>
                    <Card
                        number={stats.meals}
                        description="refeições registradas"
                    />
                </DataRow>

                <DataRow>
                    <Card
                        type="SUCCESS"
                        number={stats.inDietMeals}
                        description="refeições dentro da dieta"
                    />
                    <Card
                        type="DANGER"
                        number={stats.outDietMeals}
                        description="refeições fora da dieta"
                    />
                </DataRow>
            </Body>
        </Container>
    )
}