import { useQuery } from "react-query";
import {Api} from "../Api.ts";

class ExpensesService {
    static async getExpenses() {
        return Api.get('expenses')
    }
}

export const useExpenses = () => {
    const {
        data: expenses,
        isLoading,
    } = useQuery("expenses", ExpensesService.getExpenses);

    return {
        expenses: expenses || [],
        isLoading
    }
}