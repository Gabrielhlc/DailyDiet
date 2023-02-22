import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


type Props = {
    inDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
    height: 49px;

    align-items: center;
    flex-direction: row;

    justify-content: space-between;

    margin-bottom: 8px;
    
    padding: 14px 16px 14px 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`;

export const Hour = styled.Text`

    padding-right: 12px;
    
    border-right-width: 1px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
        border-right-color: ${theme.COLORS.GRAY_4};
    ` }
`;

export const Description = styled.Text`
    height: 21px;

    flex: 1;
    margin: 0 12px;


    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    ` }
`;

export const InDiet = styled.View <Props>`
    width: 14px;
    height: 14px;

    background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 999px;
`;