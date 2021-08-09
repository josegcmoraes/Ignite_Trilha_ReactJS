import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                    type="button"
                    onClick={openNewTransactionModal}
                >
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}