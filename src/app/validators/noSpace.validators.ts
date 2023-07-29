import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace{

    static noSpaceValidations(control: AbstractControl): ValidationErrors | null{

        let controlValue = control.value as string;
        if(controlValue.indexOf(' ') >= 0){
            return {noSpaceValidations: true}
        }else{
            return null;
        }
    }
}