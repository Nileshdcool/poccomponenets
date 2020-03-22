import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'poc-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() formControlName: any;
  @Input() parentForm: FormGroup;
  @Output() onError = new EventEmitter();
  @Input() isError: boolean = false;
  @Input() matAutosizeMinRows:number = 2;
  @Input() matAutosizeMaxRows:number = 5;

  constructor() { }

  ngOnInit() {
  }

}
