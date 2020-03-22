import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'poc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() color:string = 'primary';
  @Input() type:string = 'type';
  @Input() placeholder:string = '';
  @Input() formControlName:any;
  @Input() parentForm: FormGroup;
  @Output() onError = new EventEmitter();
  @Input() isError:boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
