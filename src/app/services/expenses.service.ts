import { Injectable } from '@angular/core';
import { Expense } from '../shared/expense';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {}

  loadExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>('/api/expenses'); //paima objekta is .json files
  }

  getExpenseById(id: string): Observable<Expense> {
    return this.httpClient.get<Expense>(`/api/expenses/${id}`);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(`/api/expenses`, expense); //tiesiogiai bendrauja su db
  }

  // countExpensesAmount(): number {
  //   // return this.loadExpenses().pipe(tap((expenses: Expense[]) => {expenses.map((item: Expense) => parseFloat(item.amount)).reduce((prev, next) => prev + next)}));
  //
  //   // return expensesList
  //     // .map((item) => parseFloat(item.amount)) //gali paimti reiksme ir paimti kita reiksme
  //     // .reduce((prev, next) => prev + next);
  // }
}
