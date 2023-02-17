import styled from "styled-components/native";

import { Ionicons } from '@expo/vector-icons'

import { } from 'phosphor-react-native'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled.View`
    width: 18px;
    height: 18px;

    margin-right: 6px;
`;

export const Icon = styled(Ionicons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,

}))`
`;