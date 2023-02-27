import styled, { css } from "styled-components/native";

export type CardTypeStyleProps = 'SUCCESS' | 'DANGER' | 'NEUTRAL';

type Props = {
    type: CardTypeStyleProps;
}

export const Container = styled.View<Props>`
    flex: 1;
    height: 89px;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 16px;

    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : (type === 'DANGER' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6)};
    border-radius: 8px;
    margin: 6px;
`;

export const Number = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
    margin-bottom: 4px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    text-align: center;
`;