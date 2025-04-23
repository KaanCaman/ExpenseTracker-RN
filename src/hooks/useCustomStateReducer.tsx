import { useReducer } from "react";
import { appReducer, initialState } from "../state/reducer";
import { ExpenseItem } from "../types/expenseItemType";
import { PickerItemType } from "../types/pickerItemType";
import { ReducerActionType } from "../types/state/actionType";

/**
 * Uygulama genelinde kullanılabilecek özel bir state yönetici hook'u.
 * Custom hook to manage global app state using useReducer.
 */
export const useCustomStateReducer = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  /**
   * Yeni bir gider ekler
   * Adds a new expense to the state
   */
  const addExpense = (expense: ExpenseItem) => {
    dispatch({ type: ReducerActionType.addExpense, payload: expense });
  };

  /**
   * Gider siler
   * Deletes an expense by ID
   */
  const deleteExpense = (expenseId: string) => {
    dispatch({ type: ReducerActionType.deleteExpense, payload: expenseId });
  };

  /**
   * Yeni bir kategori ekler
   * Adds a new category to the state
   */
  const addCategory = (category: PickerItemType) => {
    dispatch({ type: ReducerActionType.addCategory, payload: category });
  };

  /**
   * Güncel state'i döndürür.
   * Returns the current state snapshot.
   */
  const getState = () => state;
  return {
    state,
    dispatch,
    addExpense,
    getState,
    deleteExpense,
    addCategory,
  };
};
