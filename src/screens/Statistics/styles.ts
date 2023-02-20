import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    padding: 0 18px;
`;

export const StatisticsHeader = styled.View`
    top: -40px; /* bring together BackIcon and DietPercentage */
    margin-bottom: -56px;
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

export const Data = styled.View`
    width: 100%;

    align-items: center;
`;

export const DataRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;