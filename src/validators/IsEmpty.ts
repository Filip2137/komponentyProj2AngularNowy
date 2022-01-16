import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isNonEmpty(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if((control.value.trim() + "") === "") return { 'isNonEmpty': true };
        return null;
    }
}