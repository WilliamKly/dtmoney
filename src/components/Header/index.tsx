import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onopenNewTransactionModal: () => void;
}

export function Header({onopenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onopenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}

