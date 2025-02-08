import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    description: '',
    ingredients: [{ name: '', quantity: 0, unit: '' }]
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}


  saveRecipe(): void {
    if (!this.recipe.name.trim()) return;

    if (this.recipe.id) {
      this.recipeService.updateRecipe({ ...this.recipe }).subscribe(() => {
        alert('Рецепт успешно обновлен!');
        this.resetForm();
      });
    } else {
      this.recipeService.createRecipe({ ...this.recipe }).subscribe(() => {
        alert('Рецепт успешно создан!');
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.recipe = {
      name: '',
      description: '',
      ingredients: [{ name: '', quantity: 0, unit: '' }],
      image: ''
    };
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.recipe.image = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  }


  cancel(): void {
    this.resetForm();
  }


  addIngredient(): void {
    this.recipe.ingredients.push({ name: '', quantity: 0, unit: '' });
  }


  removeIngredient(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }
}
