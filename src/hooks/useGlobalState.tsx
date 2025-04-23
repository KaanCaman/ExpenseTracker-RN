import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateProviderContext";

/**
 * Context'e erişim için özel hook
 * Custom hook to access global state context
 */
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
