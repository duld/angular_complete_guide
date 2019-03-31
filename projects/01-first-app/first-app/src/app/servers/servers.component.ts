import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  buttonDisabled = false;
  serverCreationStatus = `No server has been created so far.`;
  serverName = ''
  
  constructor() {
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 500);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = `A server has been created.`;
    console.log(this.serverCreationStatus);
  }

  onServerRestart() {
    this.serverCreationStatus = `Nuclear launch detected....`;
  }

  onServerNameInput(e) {
    this.serverName = e.target.value;
  }
}
