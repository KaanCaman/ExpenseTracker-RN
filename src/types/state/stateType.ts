import { ExpenseItem } from "../expenseItemType";
import { PickerItemType } from "../pickerItemType";

/**
 * * Bu tip, `AppGlobalState` içerisindeki tutulan verilerdir.
 * *  This type is the data stored in the `AppGlobalState`.
 *
 */
export interface AppGlobalState {
  expenses: ExpenseItem[];
  categories: PickerItemType[];
}
