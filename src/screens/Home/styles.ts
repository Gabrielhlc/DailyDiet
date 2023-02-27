import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 0 24px;
`

export const NewMeal = styled.View`
    width: 100%;
    height: 79px;

    margin-top: 40px;
    margin-bottom: 32px;
`;

export const NewMealTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin-bottom: 8px;
`;

export const DayList = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const DayListDate = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    ` }

    margin-bottom: 8px;
`;