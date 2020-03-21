import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'poc-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {

  @Input() placeholder:string = '';
  @Input() formControlName:FormControl;
  @Input() parentForm: FormGroup;

  constructor() { }

  getErrorEmail() {
    return this.parentForm.get('email').hasError('required') ? 'Field is required' :
      this.parentForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.parentForm.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  ngOnInit() {
  }

}
