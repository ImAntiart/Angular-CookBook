import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'БИФШТЕКС ИЗ ХОРКЕРА',
      ingredients: [
        { name: 'мясо хоркера', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Разделите мясо хоркера на куски толщиной 2-3 см, отбейте молотком и посыпьте солью. Жарьте на сковороде до хрустящей корочки.',
      image: 'src/image/horker-steak.jpg',
      createdAt: new Date('2023-01-15')
    },
    {
      id: 2,
      name: 'ГОВЯЖЬЯ ПОХЛЕБКА',
      ingredients: [
        { name: 'сырая говядина', quantity: 1, unit: 'шт.' },
        { name: 'морковь', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' },
        { name: 'чеснок', quantity: 1, unit: 'зубчик' }
      ],
      description: 'Поместите говядину, морковь, чеснок и соль в котелок, залейте водой и варите до готовности.',
      image: 'src/image/beef-soup.jpg',
      createdAt: new Date('2023-02-10')
    },
    {
      id: 3,
      name: 'ЖАРЕННЫЙ КОЗИЙ ОКОРОК',
      ingredients: [
        { name: 'козий окорок', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Посыпьте козий окорок солью и жарьте на углях или сковороде до румяной корочки.',
      image: 'src/image/goat-leg.jpg',
      createdAt: new Date('2023-03-05')
    },
    {
      id: 4,
      name: 'ЖАРЕННАЯ КОНИНА',
      ingredients: [
        { name: 'конина', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте конину тонкими ломтиками, посыпьте солью и обжарьте на среднем огне до готовности.',
      image: 'src/image/horse-meat.jpg',
      createdAt: new Date('2023-04-01')
    },
    {
      id: 5,
      name: 'ЖАРЕНАЯ КРОЛИЧЬЯ НОЖКА',
      ingredients: [
        { name: 'сырая кроличья ножка', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Обмажьте кроличью ножку солью и запекайте в духовке до золотистого цвета.',
      image: 'src/image/rabbit-leg.jpg',
      createdAt: new Date('2023-05-15')
    },
    {
      id: 6,
      name: 'ЖАРЕНАЯ КУРИНАЯ ГРУДКА',
      ingredients: [
        { name: 'сырая куриная грудка', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте куриное филе тонкими пластами, посолите и обжарьте на раскаленной сковороде.',
      image: 'src/image/chicken-breast.jpg',
      createdAt: new Date('2023-06-20')
    },
    {
      id: 7,
      name: 'КАПУСТНЫЙ СУП С КАРТОШКОЙ',
      ingredients: [
        { name: 'картофель', quantity: 1, unit: 'шт.' },
        { name: 'лук-порей', quantity: 1, unit: 'шт.' },
        { name: 'капуста', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте картофель, лук-порей и капусту, положите в кастрюлю, добавьте соль и воду. Варите до готовности.',
      image: 'src/image/cabbage-potato-soup.jpg',
      createdAt: new Date('2023-07-10')
    },
    {
      id: 8,
      name: 'ЛОСОСЁВЫЙ СТЕЙК',
      ingredients: [
        { name: 'мясо лосося', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Посыпьте лосось солью и обжарьте на сковороде с обеих сторон до румяной корочки.',
      image: 'src/image/salmon-steak.jpg',
      createdAt: new Date('2023-08-15')
    },
    {
      id: 9,
      name: 'ОВОЩНОЙ СУП',
      ingredients: [
        { name: 'капуста', quantity: 1, unit: 'шт.' },
        { name: 'картофель', quantity: 1, unit: 'шт.' },
        { name: 'лук-порей', quantity: 1, unit: 'шт.' },
        { name: 'помидор', quantity: 1, unit: 'шт.' }
      ],
      description: 'Нарежьте овощи, поместите их в кастрюлю, добавьте воду и соль. Варите до мягкости.',
      image: 'src/image/vegetable-soup.jpg',
      createdAt: new Date('2023-09-20')
    },
    {
      id: 10,
      name: 'ОЛЕНЬЯ ОТБИВНАЯ',
      ingredients: [
        { name: 'оленина', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Отбейте кусок оленины, посыпьте солью и жарьте на гриле до готовности.',
      image: 'src/image/deer-cutlet.jpg',
      createdAt: new Date('2023-10-10')
    },
    {
      id: 11,
      name: 'ОТВАРНАЯ ГОВЯДИНА',
      ingredients: [
        { name: 'сырая говядина', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Положите говядину в кастрюлю, добавьте соль и воду. Варите до мягкости мяса.',
      image: 'src/image/boiled-beef.jpg',
      createdAt: new Date('2023-11-05')
    },
    {
      id: 12,
      name: 'ПОХЛЕБКА ИЗ КАПУСТЫ И ЯБЛОК',
      ingredients: [
        { name: 'капуста', quantity: 1, unit: 'шт.' },
        { name: 'красное яблоко', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте капусту и яблоко, положите в кастрюлю, добавьте соль и воду. Варите до готовности.',
      image: 'src/image/cabbage-apple-soup.jpg',
      createdAt: new Date('2023-12-15')
    },
    {
      id: 13,
      name: 'ПОХЛЁБКА ИЗ ОЛЕНИНЫ',
      ingredients: [
        { name: 'оленина', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' },
        { name: 'картофель', quantity: 1, unit: 'шт.' },
        { name: 'лук-порей', quantity: 1, unit: 'шт.' }
      ],
      description: 'Поместите оленину, картофель и лук-порей в кастрюлю, добавьте соль и воду. Варите до готовности.',
      image: 'src/image/deer-soup.jpg',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 14,
      name: 'ПОХЛЁБКА ИХ ХОРКЕРА',
      ingredients: [
        { name: 'мясо хоркера', quantity: 1, unit: 'шт.' },
        { name: 'лаванда', quantity: 1, unit: 'щепотка' },
        { name: 'чеснок', quantity: 1, unit: 'зубчик' },
        { name: 'помидор', quantity: 1, unit: 'шт.' }
      ],
      description: 'Поместите мясо хоркера, лаванду, чеснок и помидор в котелок, залейте водой и варите до готовности.',
      image: 'src/image/horker-broth.jpg',
      createdAt: new Date('2024-02-20')
    },
    {
      id: 15,
      name: 'СТЕЙК ИЗ МАМОНТА',
      ingredients: [
        { name: 'хобот мамонта', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте хобот мамонта тонкими ломтиками, посыпьте солью и жарьте на сковороде до готовности.',
      image: 'src/image/mammoth-steak.jpg',
      createdAt: new Date('2024-03-15')
    },
    {
      id: 16,
      name: 'ТОМАТНЫЙ СУП',
      ingredients: [
        { name: 'помидор', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' },
        { name: 'чеснок', quantity: 1, unit: 'зубчик' },
        { name: 'лук-порей', quantity: 1, unit: 'шт.' }
      ],
      description: 'Нарежьте помидоры, чеснок и лук-порей, положите в кастрюлю, добавьте соль и воду. Варите до однородности.',
      image: 'src/image/tomato-soup.jpg',
      createdAt: new Date('2024-04-10')
    },
    {
      id: 17,
      name: 'ФАЗАНЬЕ ЖАРКОЕ',
      ingredients: [
        { name: 'фазанья грудка', quantity: 1, unit: 'шт.' },
        { name: 'соль', quantity: 1, unit: 'щепотка' }
      ],
      description: 'Нарежьте фазанью грудку кусочками, посыпьте солью и обжарьте на сковороде до золотистого цвета.',
      image: 'src/image/pheasant-roast.jpg',
      createdAt: new Date('2024-05-20')
    },
    {
      id: 18,
      name: 'ЭЛЬСВЕЙРСКОЕ ФОНДЮ',
      ingredients: [
        { name: 'круг эйдарского сыра', quantity: 1, unit: 'шт.' },
        { name: 'лунный сахар', quantity: 1, unit: 'щепотка' },
        { name: 'эль', quantity: 1, unit: 'шт.' }
      ],
      description: 'Растопите сыр в эле, добавьте лунный сахар и подавайте горячим.',
      image: 'src/image/elsweyr-fondue.jpg',
      createdAt: new Date('2024-06-15')
    }
  ];

  // Методы CRUD остаются без изменений
  getRecipes(): Observable<Recipe[]> {
    return of(
      this.recipes.map(recipe => ({ ...recipe, isEditing: false })) // Инициализируем isEditing как false
    );
  }

  getRecipe(id: number): Observable<Recipe | undefined> {
    return of(this.recipes.find(r => r.id === id));
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    recipe.id = this.generateId();
    recipe.createdAt = new Date(); // Добавляем текущую дату
    this.recipes.push(recipe);
    return of(recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const index = this.recipes.findIndex(r => r.id === recipe.id);
    if (index !== -1) this.recipes[index] = { ...recipe }; // Создаем копию объекта
    return of(recipe);
  }

  deleteRecipe(id: number): Observable<void> {
    this.recipes = this.recipes.filter(r => r.id !== id);
    return of();
  }

  private generateId(): number {
    // Извлекаем все ID и фильтруем undefined
    const ids = this.recipes
      .map(r => r.id) // Получаем массив ID
      .filter(id => typeof id === 'number') // Оставляем только числовые значения
      .map(Number); // Преобразуем в массив чисел

    // Если массив не пустой, берем максимальное значение + 1, иначе возвращаем 1
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
