import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'poc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() labelValue: string;

  constructor() { }

  ngOnInit() {
  }

}
