import { Component, OnInit } from '@angular/core';
import {Expense} from "../shared/expense";
import {ExpensesService} from "../services/expenses.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {
  expense: Expense | undefined;

  constructor(private expenseService: ExpensesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.expense = this.expenseService.getExpenseById(id)
  }


}
