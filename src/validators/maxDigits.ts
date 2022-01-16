import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

function isDigit(c: string) {
    return c == '0' || Number(c);
}

function countDigits(s: string) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(isDigit(element)) count++;
    }
    return count;
}

export function maxDigits(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        console.log(countDigits(control.value + ""));
        if(countDigits(control.value + "") > max) return { 'underMaxDigits': true };
        return null;   
    };
}