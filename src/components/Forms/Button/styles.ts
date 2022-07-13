import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
width: 100%;
background-color: ${({theme}) => theme.colors.secondary};
border-radius: 5px;
align-items: center;
padding: 18px;

`
export const Title = styled.Text`
font-size: 14px;
font-family: ${({theme}) => theme.fonts.medium};
color: ${({theme}) => theme.colors.shape};
`

