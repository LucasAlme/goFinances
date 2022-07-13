import React, { useState } from 'react';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

export function Register() {

    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypesSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder='Nome' />
                    <Input placeholder='Preço' />
                    <TransactionTypes>
                        <TransactionTypeButton isActive={transactionType === 'up'} type='up' title='Income' onPress={() => handleTransactionTypesSelect('up')} />
                        <TransactionTypeButton isActive={transactionType === 'down'} type='down' title='Outcome' onPress={() => handleTransactionTypesSelect('down')} />
                    </TransactionTypes>
                </Fields>
                <Button title='Enviar' />
            </Form>


        </Container>
    )
}