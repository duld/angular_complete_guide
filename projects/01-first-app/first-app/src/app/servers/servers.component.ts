import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  buttonDisabled = false;
  serverCreationStatus = `No server has been created so far.`;
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['serverA', 'serverB'];
  
  constructor() {
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 1500);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = `A server has been created.`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onServerRestart() {
    this.serverCreationStatus = `Nuclear launch detected....`;
  }

  onServerNameInput(e) {
    this.serverName = e.target.value;
  }

  onClearServers() {
    console.log('clear!')
    // this.servers.push('bill');
    this.servers = [];
  }
}
