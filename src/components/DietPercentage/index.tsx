import { useCallback, useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { statisticsGetStats, Stats } from "@utils/statisticsGetStats";

import { Arrow, Button, Container, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    showArrow?: boolean;
}

export function DietPercentage({ showArrow = false, ...rest }: Props) {
    const [stats, setStats] = useState<Stats>(Object);

    async function fetchStats() {
        try {
            const stats = await statisticsGetStats();
            setStats(stats)
        } catch (error) {
            console.log(error)
        }
    }

    const navigation = useNavigation();

    function handleStatistics() {
        navigation.navigate('statistics')
    }

    useFocusEffect(useCallback(() => {
        fetchStats();
    }, []));

    return (
        <Container percentage={stats!.percentage}>

            {showArrow && (
                <Button {...rest} onPress={handleStatistics}>
                    <Arrow />
                </Button>
            )}
            <Title>
                {stats!.percentage}%
            </Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}