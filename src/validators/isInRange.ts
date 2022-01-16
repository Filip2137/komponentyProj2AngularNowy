import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isInRange(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        console.log(control.value)
        if(control.value !== undefined && !(control.value >= min && control.value <= max)) return { 'inRange': true };
        return null;
    } 
}