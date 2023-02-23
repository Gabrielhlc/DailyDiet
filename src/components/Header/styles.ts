import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`

    align-items: center;
    
`;

export const Logo = styled.Image``;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    z-index: 1;
    left: 0;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    ` }
    margin-bottom: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2,
    weight: 'bold'
}))``;



