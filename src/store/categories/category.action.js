import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const setCategories = (categoriesArray) => ({ type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload: categoriesArray })