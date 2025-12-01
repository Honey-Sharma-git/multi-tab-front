import { createContext } from "react";

interface StatusContextType {
  status: string;
  setStatus: (status: string) => void;
}

export const StatusContext = createContext<StatusContextType>({
  status: "Away",
  setStatus: () => {},
});
