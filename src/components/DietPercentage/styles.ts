import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

type Props = {
    percentage: number;
}

export const Container = styled.View<Props>`

    align-items: center;
    
    padding: 20px 16px;

    background-color: ${({ theme, percentage }) => percentage > 66.66 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
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

export const Button = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position:absolute;
  z-index: 1;
  right: 8px;
  top: 8px;
  align-self: flex-start;
`;

export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
`;

