import { useQuery } from "@tanstack/react-query";
import { Api } from "../Api.ts";

class ExpensesService {
  static async getExpenses() {
    return Api.get("expenses");
  }
}

export const useExpenses = () => {
  const { data: expenses, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: ExpensesService.getExpenses,
  });

  return {
    expenses: expenses || [],
    isLoading,
  };
};
