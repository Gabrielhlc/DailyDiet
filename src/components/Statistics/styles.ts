import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
    width: 100%;

    height: 102px;

    align-items: center;
    
    padding: 20px 16px;
    margin-bottom: 40px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;
`;

export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
    width: 24px;
    height: 24px;

    position: absolute;
    right: 8px;
    top: 8px;
`;


export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE["2XL"]}px;
    `}
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;