import {Table} from '@mantine/core';


type Expense = {
    description: string;
    amount: number;
    payer: string;
}

type Props = {
    expenses: Expense[];
}

export default function ExpensesTable({expenses}: Props) {
    const rows = expenses.map((expense) => (
        <Table.Tr key={`${expense.description}${expense.amount}${expense.payer}`}>
            <Table.Td align='left'>{expense.description}</Table.Td>
            <Table.Td align='left'>{expense.payer}</Table.Td>
            <Table.Td align='right'>{expense.amount}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table style={{width: '500px'}}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Description</Table.Th>
                    <Table.Th>Payer</Table.Th>
                    <Table.Th>Amount</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}