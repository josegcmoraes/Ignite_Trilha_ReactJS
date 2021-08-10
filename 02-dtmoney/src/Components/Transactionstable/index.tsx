// import { useEffect, useState, useContext } from "react";
// import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";
// import { api } from "../../services/api";
// import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

// interface Transaction {
//     id: number;
//     title: string;
//     category: string;
//     type: string;
//     amount: number;
//     createAt: string;
// }


export function TransactionsTable() {
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/transactions')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, []);
    const { transactions } = useTransactions();

    // const [transactions, setTransactions] = useState<Transaction[]>([]);
    // useEffect(() => {
    //     api.get('/transactions')
    //         // .then(response => console.log(response.data))
    //         .then(response => setTransactions(response.data.transactions))
    // }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createAt)
                                    ) || transaction.createAt}
                                </td>
                            </tr>
                        );
                    })}

                    {/* <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$ 1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr> */}



                </tbody>

            </table>
        </Container>
    )
}