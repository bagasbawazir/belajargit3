import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-new-comp]',
  // selector: '.app-new-comp',
  selector: 'app-new-comp',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl : './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
