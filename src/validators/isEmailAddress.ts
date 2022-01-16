import { AbstractControl, ValidatorFn } from "@angular/forms";


function validateEmail(s: string) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !re.test(s);
}

export function isEmailAddress(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null  => {
        console.log(validateEmail(control.value));
        if(control.value !== undefined && validateEmail(control.value)) return { 'isEmailAddress': true};
        return null;
    }
}