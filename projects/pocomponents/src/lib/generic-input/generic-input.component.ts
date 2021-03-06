import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'poc-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() formControlName: any;
  @Input() parentForm: FormGroup;
  @Output() onError = new EventEmitter();
  @Input() isError: boolean = false;
  titleAlert: string = 'This field is required';

  constructor() { }

  ngOnInit() {
  }



}
