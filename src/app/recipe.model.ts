export interface Ingredient {
  name: string; // Название ингредиента
  quantity: number; // Количество
  unit: string; // Единица измерения
}

export interface Recipe {
  id?: number; // Уникальный ID рецепта
  name: string; // Название рецепта
  ingredients: Ingredient[]; // Ингредиенты
  description: string; // Описание процесса приготовления
  image?: string; // URL картинки (опционально)
  createdAt?: Date; // Дата создания (опционально)
}
