import { AbstractControl, ControlContainer, FormGroup, ValidatorFn } from "@angular/forms";


export function isDateBehind(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        var currDate = new Date();
        var givenDate = new Date(control.value);
        if(control.value !== undefined && givenDate <= currDate) return { 'isDateBehind': false };
        return null;
   }
}