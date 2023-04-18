import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(email: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const valid = emailPattern.test(email.value);
    
    const errors = {
        password: {
            rules: 'l adresse mail nest pas valide'
        }
    };

    return !valid ? errors : null;

}
