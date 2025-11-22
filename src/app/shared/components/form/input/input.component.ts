import { Component, Input } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FieldConfig } from './../../../models/fieldConfig';

 @Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
   @Input() fields!: FieldConfig;
   @Input() form! :FormGroup;
}
 