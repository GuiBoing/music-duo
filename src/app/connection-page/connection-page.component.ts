import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  @Input() methodData: 'input' | 'output';
  selectedService;
  selectData(serviceName: string) {
    console.log(this.methodData,serviceName)
    this.selectedService = serviceName
  }

  constructor() { }

  ngOnInit() {
  }

}
