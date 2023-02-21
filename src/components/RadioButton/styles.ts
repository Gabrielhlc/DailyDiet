import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type RadioButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type?: RadioButtonTypeStyleProps;
    isActive: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 16px;

    background-color: ${({ theme, type, isActive }) => isActive ? (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT) : theme.COLORS.GRAY_6};
    border: ${({ theme, type, isActive }) => isActive ? (type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK) : 0};
    border-radius: 6px;
`;

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;

    margin-right: 8px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 999px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;