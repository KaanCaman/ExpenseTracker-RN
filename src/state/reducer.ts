import { categories as mockCategories } from "../data/mock/categories";
import { expenses as mockExpenses } from "../data/mock/expenses";
import { GlobalAction, ReducerActionType } from "../types/state/actionType";
import { AppGlobalState } from "../types/state/stateType";

export const initialState: AppGlobalState = {
  expenses: mockExpenses,
  categories: mockCategories,
};

export const appReducer = (
  state: AppGlobalState,
  action: GlobalAction
): AppGlobalState => {
  switch (action.type) {
    // Add Expense
    case ReducerActionType.addExpense:
      return { ...state, expenses: [action.payload, ...state.expenses] };

    // Delete Expense
    case ReducerActionType.deleteExpense:
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      };

    // Reset Expenses
    case ReducerActionType.resetExpense:
      return {
        ...state,
        expenses: mockExpenses,
      };

    // Add Category
    case ReducerActionType.addCategory:
      return {
        ...state,
        categories: [action.payload, ...state.categories],
      };

    // Reset Categories
    case ReducerActionType.resetCategories:
      return {
        ...state,
        categories: mockCategories,
      };

    case ReducerActionType.resetAllState:
      return initialState;

    default:
      return state;
  }
};
