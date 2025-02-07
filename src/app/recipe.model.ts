export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id?: number;
  name: string;
  ingredients: Ingredient[];
  description: string;
  image?: string;
  createdAt?: Date;
  isEditing?: boolean; // Новое поле для режима редактирования
}
