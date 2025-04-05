expenses = [{
    'description': 'Beers',
    'amount': '24.50',
    'payer': 'John Doe',
}]

class ExpensesRepository:
    def __init__(self):
        self.expenses = expenses

    def get_all(self):
        return self.expenses

    def add(self, expense):
        self.expenses.append(expense)
