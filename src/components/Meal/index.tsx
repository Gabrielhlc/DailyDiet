import { TouchableOpacityProps } from "react-native";
import { Container, Description, Hour, InDiet } from "./styles";

type Props = TouchableOpacityProps & {
    time: string;
    name: string;
    inDiet: boolean;
}

export function Meal({ time, name, inDiet, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Hour>{time}</Hour>
            <Description numberOfLines={1}>{name}</Description>
            <InDiet inDiet={inDiet} />
        </Container>
    )
}