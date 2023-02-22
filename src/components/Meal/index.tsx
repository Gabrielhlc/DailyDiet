import { TouchableOpacityProps } from "react-native";
import { Container, Description, Hour, InDiet } from "./styles";

type Props = TouchableOpacityProps & {
    time: string;
    description: string;
    inDiet: boolean;
}

export function Meal({ time, description, inDiet, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Hour>{time}</Hour>
            <Description numberOfLines={1}>{description}</Description>
            <InDiet inDiet={inDiet} />
        </Container>
    )
}