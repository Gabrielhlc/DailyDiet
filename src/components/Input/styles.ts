import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 20px;
    width: 100%;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    width: 100%;
    margin-bottom: 4px;
`;

export const TextInput = styled.TextInput`
    width: 100%;

    padding: 14px;
    /* text-align: left; */
    

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;

`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;