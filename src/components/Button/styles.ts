import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`

    padding: 16px 24px;
    
    align-items: center;
    justify-content: center;

    flex-direction: row;
    
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_7};
    border: ${({ theme, type }) => type === 'PRIMARY' ? 0 : theme.COLORS.GRAY_1};
    border-radius: 6px;

    margin-bottom: 8px;
`;

export const Title = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    ` }
    color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1} 
`;