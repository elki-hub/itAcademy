import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ExpensesService } from '../../../services/expenses.service';

export const regulatoryValidator =
  (expenseService: ExpensesService) =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    return expenseService
      .validateDescription(control.value)
      .pipe(
        map((response: { valid: boolean }) =>
          response.valid ? null : { regulatory: {} }
        )
      );
  };
