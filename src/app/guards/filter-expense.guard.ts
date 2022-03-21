import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ExpensesService} from "../services/expenses.service";

@Injectable({
  providedIn: 'root'
})
export class FilterExpenseGuard implements CanActivate {

  constructor(private expensesService: ExpensesService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = route.paramMap.get('id');

    return this.expensesService.isExpenseInTheList(id);
  }
}
