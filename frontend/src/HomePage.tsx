import './App.css'
import { useForm } from '@mantine/form';
import ExpensesTable from "./ExpensesTable.tsx";
import {NumberInput, Loader, Button, Flex, Modal, TextInput, Stack} from "@mantine/core";
import {useExpenses} from "./hooks/expenses.ts";
import { useDisclosure } from '@mantine/hooks';


function App() {
    const [opened, { open, close }] = useDisclosure(false);
    const {isLoading, expenses} = useExpenses()
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            description: null,
            amount: null,
            payer: null
        },
      });
    

    if(isLoading) {
        return <Loader />
    }

    const handleButtonClick = () => {
        open()
    }

    return (
        <Stack align={'center'} justify={'center'}>
            <Modal opened={opened} onClose={close} title="Authentication">
            <form
                onSubmit={form.onSubmit((values) => console.log('values', values))}
            >
                <TextInput
                    label="Description"
                    placeholder="Description"
                    key={form.key('description')}
                    {...form.getInputProps('description')}
                />
                <NumberInput
                    label="Amount"
                    placeholder="Amount"
                    key={form.key('amount')}
                    {...form.getInputProps('amount')}
                />
                <TextInput
                    label="Payer"
                    placeholder="Payer"
                    key={form.key('payer')}
                    {...form.getInputProps('payer')}
                />
                <Button mt='sm' variant="filled" radius="xl" type='submit' onClick={() => close()}>Submit</Button>
            </form>
            </Modal>
            <Flex justify="flex-end" direction="row" display={'flex'} mb={'md'} >
                <Button variant="filled" radius="xl" onClick={handleButtonClick}>Add</Button>
            </Flex>
            <ExpensesTable expenses={expenses} />
        </Stack>
    )
}

export default App
