import { AbstractControl } from '@angular/forms';

export function tamanhoMinimoValidator(
  control: AbstractControl
): Object | null {
  const total = control.value.length as number;

  if (total < 3) {
    return { tamanhoMinimo: true };
  } else {
    return null;
  }
}
