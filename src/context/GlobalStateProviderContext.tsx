import React, { createContext, useContext, ReactNode } from "react";
import { useCustomStateReducer } from "../hooks/useCustomStateReducer";
import { AppGlobalState } from "../types/state/stateType";
import { ExpenseItem } from "../types/expenseItemType";
import { PickerItemType } from "../types/pickerItemType";

/**
 * Context tipi: global state ve aksiyon fonksiyonlarını içerir
 * Context type: includes global state and action functions
 */
type GlobalStateContextType = {
  state: AppGlobalState;
  addExpense: (expense: ExpenseItem) => void;
  deleteExpense: (expenseId: string) => void;
  updateCategories: (category: PickerItemType[]) => void;
  getState: () => AppGlobalState;
};

/**
 * Context'in oluşturulması
 * Create the global state context
 */
export const GlobalStateContext = createContext<
  GlobalStateContextType | undefined
>(undefined);

/**
 * Provider bileşeni: alt bileşenlere state ve fonksiyonları sağlar
 * Provider component: provides state and functions to child components
 */
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const { state, addExpense, deleteExpense, updateCategories, getState } =
    useCustomStateReducer();

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        addExpense,
        getState,
        deleteExpense,
        updateCategories,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
