import { Injectable } from '@angular/core';
import {expensesList} from "../shared/DATA";
import {Expense} from "../shared/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenseList: Expense[] = this.loadExpenses();

  constructor() { }

  loadExpenses(): Expense[]{
    return expensesList;
  }

  getExpenseById(id: string | null): Expense | undefined{
    for (let expense of this.expenseList){
      if(expense.id == id){
        console.log(expense);
        return expense;
      }
    }
    return undefined;
  }

  countExpensesAmount(): number{
    let amount = 0;
    for (let expense of this.expenseList){
      amount += parseFloat(expense.amount);
    }
    return amount;
  }

  isExpenseInTheList(id: string | null): boolean{
    return !(this.getExpenseById(id) == undefined);
  }

}
