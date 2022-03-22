import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from './expense.model';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  expense: ExpenseModel = new ExpenseModel('', '', '');

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {}

  addExpense() {
    this.expensesService
      .addExpense(this.expense)
      .subscribe(() => (this.expense = new ExpenseModel('', '', '')));
  }

  resetExpense() {
    this.expense = new ExpenseModel('', '', '');
  }
}
