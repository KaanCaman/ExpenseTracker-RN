import { ExpenseItem } from "../expenseItemType";
import { PickerItemType } from "../pickerItemType";

/**
 * Tüm kullanılabilir global aksiyon türlerini tanımlar
 * Defines all available global action types for state management
 */
export enum ReducerActionType {
  // Gider ekleme aksiyonu // Add expense action
  addExpense = "ADD_EXPENSE",

  // Gider silme aksiyonu // Delete expense action
  deleteExpense = "DELETE_EXPENSE",

  // Gider güncelleme aksiyonu // Update expense action
  updateExpense = "UPDATE_EXPENSE",

  // Giderleri sıfırlama aksiyonu // Reset all expenses
  resetExpense = "RESET_EXPENSES",

  // Kategori ekleme aksiyonu // Add category action
  updateCategories = "UPDATE_CATEGORIES",

  // Kategorileri sıfırlama aksiyonu // Reset all categories
  resetCategories = "RESET_CATEGORIES",

  // Tüm state'i sıfırlama aksiyonu // Reset all global state
  resetAllState = "RESET_ALL_STATE",
}

// Gider ekleme aksiyonu tipi // Add expense action type
export interface AddExpenseAction {
  type: ReducerActionType.addExpense;
  payload: ExpenseItem;
}

// Gider silme aksiyonu tipi // Delete expense action type
export interface DeleteExpenseAction {
  type: ReducerActionType.deleteExpense;
  payload: string;
}

// Gider güncelleme aksiyonu tipi // Update expense action type
export interface UpdateExpenseAction {
  type: ReducerActionType.updateExpense;
  payload?: ExpenseItem;
}

// Giderleri sıfırlama aksiyonu tipi // Reset all expenses type
export interface ResetExpenseAction {
  type: ReducerActionType.resetExpense;
  payload?: ExpenseItem[];
}

// Kategori ekleme aksiyonu tipi // Add category action type
export interface UpdateCategoriesAction {
  type: ReducerActionType.updateCategories;
  payload: PickerItemType[];
}

// Kategorileri sıfırlama aksiyonu tipi // Reset all categories type
export interface ResetCategoriesAction {
  type: ReducerActionType.resetCategories;
  payload?: PickerItemType[];
}
// Tüm state'i sıfırlama aksiyonu tipi // Reset all global state type
export interface ResetAllStateAction {
  type: ReducerActionType.resetAllState;
  payload?: any;
}

/**
 * Aksiyon tipi: useReducer tarafından kullanılacak aksiyon objesi
 * Action type: object structure to be dispatched into useReducer
 */
export type GlobalAction =
  | AddExpenseAction
  | UpdateExpenseAction
  | DeleteExpenseAction
  | ResetExpenseAction
  | UpdateCategoriesAction
  | ResetCategoriesAction
  | ResetAllStateAction;
