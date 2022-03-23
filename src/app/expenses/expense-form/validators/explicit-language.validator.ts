import { AbstractControl, ValidationErrors } from '@angular/forms';

const badWords = ['sudas'];

export const explicitLanguageValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const invalid = badWords.some((word: string) => control.value.includes(word));
  return invalid ? { explicitLanguage: { word: badWords[0] } } : null;
};
