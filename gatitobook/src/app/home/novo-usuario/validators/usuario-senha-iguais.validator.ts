import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export function usuarioSenhaIguaisValidator(
  formGroup: FormGroup
): Object | null {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
