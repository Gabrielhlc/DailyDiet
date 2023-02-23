import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    inDiet: boolean;
}

export const Container = styled(SafeAreaView) <Props>`
    flex: 1;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding: 0 24px;
`;

export const Body = styled.View`
    flex: 1;

    margin: 0 -24px; /*escape container padding */

    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
    margin-top: 16px;
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin-bottom: 24px;
`;

export const DateAndTimeTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-bottom: 8px;
`;

export const DateAndTimeInfo = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

    margin-bottom: 32px;
`;

export const Tag = styled.View`
    width: 144px;

    flex-direction: row;
    padding: 8px 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 1000px;

    justify-content: center;
    align-items: center;

`;

export const TagText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;

    margin-right: 8px;

    background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 1000px;
`;

export const ButtonsContainer = styled.View`
    margin-top: auto;
`;