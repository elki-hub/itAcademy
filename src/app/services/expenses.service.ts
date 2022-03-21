import { Injectable } from '@angular/core';
import { expensesList } from '../shared/DATA';
import { Expense } from '../shared/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  expenseList: Expense[] = this.loadExpenses();

  constructor() {}

  loadExpenses(): Expense[] {
    return expensesList;
  }

  getExpenseById(id: string | null): Expense | undefined {
    return this.expenseList.find((expense) => expense.id === id);
  }

  countExpensesAmount(): number {
    return this.expenseList
      .map((item) => parseFloat(item.amount))
      .reduce((prev, next) => prev + next);
  }
}
