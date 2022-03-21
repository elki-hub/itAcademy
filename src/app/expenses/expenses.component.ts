import {Component, OnInit} from '@angular/core';
import {Expense} from "../shared/expense";
import {ExpensesService} from "../services/expenses.service";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenseList: Expense[] | undefined;
  totalAmount: number | undefined;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.expenseList = this.expensesService.loadExpenses();
    this.totalAmount = this.expensesService.countExpensesAmount();
  }

}
