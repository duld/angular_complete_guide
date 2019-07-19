import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editSub: Subscription;
  editMode = false;
  editItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSub = this.shoppingListService.startedEditing
      .subscribe((id: number) => {
        this.editMode = true;
        this.editItemIndex = id;

        const ingredient = this.shoppingListService.getIngredient(id);
        console.log(ingredient);
      });
  }

  ngOnDestroy() {
    this.editSub.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    form.reset();
  }
}
