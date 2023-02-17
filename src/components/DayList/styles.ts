import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const Date = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    ` }
`;

export const Meal = styled(TouchableOpacity)`

    align-items: center;

    /* justify-content: space-between; */
    
    padding: 14px 16px 14px 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`;

