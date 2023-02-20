import { Card } from "@components/Card";
import { DietPercentage } from "@components/DietPercentage";
import { Header } from "@components/Header";
import { Container, Body, StatisticsHeader, Title, Data, DataRow } from "./styles";

export function Statistics() {
    return (
        <Container>

            <Header />
            <StatisticsHeader>
                <DietPercentage />
            </StatisticsHeader>

            <Body>
                <Title>
                    Estatísticas gerais
                </Title>

                <Data>
                    <DataRow>
                        <Card
                            number="22"
                            description="melhor sequência de pratos dentro da dieta"
                        />
                    </DataRow>
                    <DataRow>
                        <Card
                            number="109"
                            description="refeições registradas"
                        />
                    </DataRow>
                </Data>
                <DataRow>
                    <Card
                        type="SUCCESS"
                        number="99"
                        description="refeições dentro da dieta"
                    />
                    <Card
                        type="DANGER"
                        number="10"
                        description="refeições fora da dieta"
                    />
                </DataRow>
            </Body>
        </Container>
    )
}