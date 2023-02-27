import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    percentage: number;
}

export const Container = styled(SafeAreaView) <Props>`
    flex: 1;
    background-color: ${({ theme, percentage }) => percentage > 66.66 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding: 0 18px;
`;

export const StatisticsHeader = styled.View`
    margin-top: -8px;
    margin-bottom: 16px;
`;

export const Body = styled.View`
    flex: 1;
    
    margin: 0 -24px; /* escape container padding */

    padding: 34px 24px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    
    margin-bottom: 24px;
`;

export const DataRow = styled.View`
    width: 100%;
    flex-direction: row;
`;