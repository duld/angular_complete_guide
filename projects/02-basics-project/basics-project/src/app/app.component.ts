import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appToDisplay: string;

  constructor() {
    this.appToDisplay = 'recipes';
  }

  onAppSelect(str) {
    this.appToDisplay = str;
  }
}
