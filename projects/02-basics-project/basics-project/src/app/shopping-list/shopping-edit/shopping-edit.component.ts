import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSubmitIngredient() {
    console.log('addIngredient!')
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value);
    this.addIngredient.emit(newIngredient);
  }
}
