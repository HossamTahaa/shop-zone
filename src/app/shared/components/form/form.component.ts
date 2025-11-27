import { Component, Input,Output,EventEmitter} from '@angular/core';
import { FormGeneratorService } from '../../services/form-generator.service';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldConfig } from './../../models/fieldConfig';
import { InputComponent } from './input/input.component';
 @Component({
   selector: 'app-form',
   standalone: true,
   imports: [ReactiveFormsModule, CommonModule, FormsModule,InputComponent],
   templateUrl: './form.component.html',
   styleUrl: './form.component.scss',
 })
 export class FormComponent {
   @Input() fields!: FieldConfig[];
   @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
   submited: boolean = false;
   form!: FormGroup;
   constructor(private formGenerator: FormGeneratorService) {}
   
   ngOnInit(): void {
    
     if (this.fields) {
       this.form = this.formGenerator.createForm(this.fields);
     }
   }
   handelClick(): void {
     if(this.form.valid){
      const formValue = this.form.value;
      this.onSubmit.emit(formValue);
      }else{
        this.submited = true;
      }
   }
 }