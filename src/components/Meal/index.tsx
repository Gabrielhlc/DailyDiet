import { TouchableOpacityProps } from "react-native";
import { Container, Description, Hour, Status } from "./styles";

type Props = TouchableOpacityProps & {
    hour: string;
    description: string;
    status: boolean;
}

export function Meal({ hour, description, status, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Hour>{hour}</Hour>
            <Description numberOfLines={1}>{description}</Description>
            <Status status={status} />
        </Container>
    )
}