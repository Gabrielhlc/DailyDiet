import styled, { css } from "styled-components/native";

export type TitleTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TitleTypeStyleProps;
}

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 0 24px;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}

    align-items: center;
    justify-content: center;
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    align-items: center;
    justify-content: center;
`;

export const Illustration = styled.Image`
    align-items: center;
    margin-bottom: 32px;
`;