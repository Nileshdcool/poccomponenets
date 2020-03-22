import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'poc-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() formControlName: any;
  @Input() parentForm: FormGroup;
  @Output() onError = new EventEmitter();
  @Input() isError: boolean = false;

  constructor() { }

  getErrorPassword() {
    return this.parentForm.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.parentForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  ngOnInit() {
  }

}
