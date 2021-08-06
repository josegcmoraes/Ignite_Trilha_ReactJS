import { Summary } from "../Summary";
import { TransactionsTable } from "../Transactionstable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
            {/* <h1>ola</h1> */}
        </Container>
    )
}