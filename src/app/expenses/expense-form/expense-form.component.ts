import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();
  expenseForm: FormGroup;

  get expenseName() {
    return this.expenseForm.get('name'); //paima expense form is konstructoriaus
  }

  get expenseDate() {
    return this.expenseForm.get('date'); //paima expense form is konstructoriaus
  }

  get expenseAmount() {
    return this.expenseForm.get('amount'); //paima expense form is konstructoriaus
  }

  constructor(private expensesService: ExpensesService) {
    this.expenseForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.pattern('[a-zA-Z]*')],
      }),
      date: new FormControl('', { validators: [Validators.required] }),
      amount: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(5)],
      }),
    });
  }

  ngOnInit(): void {}

  addExpense() {
    const expense = this.expenseForm.getRawValue();
    this.expensesService.addExpense(expense).subscribe(() => {
      this.expenseUpdated.emit();
      this.resetExpense();
    });
  }

  resetExpense() {
    this.expenseForm.reset();
  }
}
