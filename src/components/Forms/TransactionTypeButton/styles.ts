import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
width: 48%;
flex-direction: row;
align-items: center;
justify-content: center;
border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
border-color: ${({ theme }) => theme.colors.text};
border-style: solid;
border-radius: 5px;
padding: 16px 

${({isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.success_light};
`}

${({isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.attention_light};
`}
`

export const Icon = styled(Feather)<IconProps>`
    font-size: 24px;
    margin-right: 12px;
    color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.regular};
`
