import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  static ChekckNonNegative(ctrl: AbstractControl): any {
      const value = ctrl.value; // read value received from AbstractControl
      console.log(value);
      if(value >= 0) {
        console.log('true');
        return null// valid
      } else {
        console.log('false');
        return { positive : false } // invalid
      }

  }
}
