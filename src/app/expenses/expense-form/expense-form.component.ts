import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { explicitLanguageValidator } from './validators/explicit-language.validator';
import { nameDescriptionValidator } from './validators/name-description.validator';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();
  expenseForm: FormGroup;
  MaxDescriptionLength: number = 20;
  remainingLength$: Observable<number> = of(0);

  get expenseName() {
    return this.expenseForm.get('name'); //paima expense form is konstructoriaus
  }

  get expenseDate() {
    return this.expenseForm.get('date'); //paima expense form is konstructoriaus
  }

  get expenseAmount() {
    return this.expenseForm.get('amount'); //paima expense form is konstructoriaus
  }

  get expenseDescription() {
    return this.expenseForm.get('description'); //paima expense form is konstructoriaus
  }

  constructor(private expensesService: ExpensesService) {
    this.expenseForm = new FormGroup(
      {
        name: new FormControl('', {
          validators: [Validators.required, Validators.pattern('[a-zA-Z]*')],
        }),
        date: new FormControl('', { validators: [Validators.required] }),
        amount: new FormControl('', {
          validators: [
            Validators.required,
            Validators.maxLength(this.MaxDescriptionLength),
            Validators.pattern('[0-9][0-9.,]*'),
          ],
        }),
        description: new FormControl('', {
          validators: [Validators.maxLength(20), explicitLanguageValidator],
        }),
      },
      { validators: [nameDescriptionValidator] }
    );
  }

  ngOnInit(): void {
    this.remainingLength$ = this.expenseDescription!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.MaxDescriptionLength - value.length)
    );
  }

  addExpense() {
    const expense = this.expenseForm.getRawValue();
    this.expensesService.addExpense(expense).subscribe(() => {
      this.expenseUpdated.emit();
      this.resetExpense();
    });
  }

  resetExpense() {
    this.expenseForm.reset();
    this.remainingLength$ = of(0);
  }
}
