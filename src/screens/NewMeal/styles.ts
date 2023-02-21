import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
    padding: 0 24px;
`;

export const Body = styled.View`
    flex: 1;

    margin: 0 -24px; /*escape container padding */

    padding: 24px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const InputRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const RadiosTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    width: 100%;
    margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: auto;
`;