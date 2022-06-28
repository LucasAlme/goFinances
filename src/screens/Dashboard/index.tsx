import React from 'react';
import { HighlightCard } from '../../components/highlightCard';
import {
    Container, Header, HighlightCards, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper
} from './styles';

export function Dashboard() {
    return (
        <Container >
            <Header>
                <UserWrapper>

                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/69490077?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Lucas</UserName>
                        </User>

                    </UserInfo>
                    <Icon name='power' />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' type='up' />
                <HighlightCard title='Saídas' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril' type='down' />
                <HighlightCard title='Entradas' amount='R$ 16.141,00' lastTransaction='01 à 16 de abril' type='total' />
            </HighlightCards>
        </Container>
    )
}