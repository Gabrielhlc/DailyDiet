import { Arrow, Button, Container, Subtitle, Title } from "./styles";

type Props = {
    showArrow?: boolean;
}

export function DietPercentage({ showArrow = false }: Props) {
    return (
        <Container>

            {showArrow && (
                <Button>
                    <Arrow />
                </Button>
            )}
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}