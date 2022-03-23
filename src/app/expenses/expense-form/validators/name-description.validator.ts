import { AbstractControl, ValidationErrors } from '@angular/forms';

export const nameDescriptionValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const expenseName = control.get('name');
  const expenseDescription = control.get('description');
  const invalid = expenseDescription!.value.includes(expenseName!.value);
  return invalid ? { nameDescription: {} } : null;
};
