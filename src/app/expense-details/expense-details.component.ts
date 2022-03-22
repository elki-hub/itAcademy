import { Component, OnInit } from '@angular/core';
import { Expense } from '../shared/expense';
import { ExpensesService } from '../services/expenses.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expense$: Observable<Expense> = of(); //new subject
  id: string | null = '';

  constructor(
    private expenseService: ExpensesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.expense$ = this.expenseService.getExpenseById(this.id);
    }
  }
}
