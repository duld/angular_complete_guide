import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appToDisplay: string;

  onShowRecipes(str) {
    this.appToDisplay = str;
  }

  onShowShoppingList(str) {
    this.appToDisplay = str;
  }

  onAppSelect(str) {
    this.appToDisplay = str;
  }
}
