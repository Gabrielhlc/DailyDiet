import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`

    align-items: center;
    
    margin-bottom: 36px;
`;

export const Logo = styled.Image``;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    z-index: 1;
    left: 0;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
    weight: 'bold'
}))``;