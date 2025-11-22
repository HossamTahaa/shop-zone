  import { Injectable } from '@angular/core';
  import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
  import { FieldConfig } from '../models/fieldConfig';
  

  @Injectable({
    providedIn: 'root',
  })
  export class FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    createForm(fields: FieldConfig[]): FormGroup {
      const formGroup = this.fb.group({});

      fields.forEach((field) => {
        if (field.type === 'checkbox' && field.options) {
          // Create FormArray for checkbox group
          const checkboxArray = this.fb.array(
            field.options.map(() => this.fb.control(false))
          );
          formGroup.addControl(field.accessor, checkboxArray);
        } else {
          // Regular input control
          const control = this.fb.control(
            { value: field.value || '', disabled: field.disabled || false },
            this.getValidators(field)
          );
          formGroup.addControl(field.accessor, control);
        }
      });

      return formGroup;
    }

  private getValidators(field: FieldConfig): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (field.validations) {
      field.validations.forEach((validation) => {
        switch (validation.type) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'email':
            validators.push(Validators.email);
            break;
          case 'minLength':
            validators.push(Validators.minLength(validation.value));
            break;
          case 'maxLength':
            validators.push(Validators.maxLength(validation.value));
            break;
         }
      });
    }

    return validators;
  }
}
