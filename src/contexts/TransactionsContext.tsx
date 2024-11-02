/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ITransaction {
  id: string;
  description: string;
  price: number;
  createdAt: string;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsContextType {
  transactions: ITransaction[];
  getTransactions: () => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const getTransactions = async () => {
    await api
      .get("/transactions")
      .then((response: any) => {
        const formattedTransactions = response.data.map(
          (transaction: ITransaction) => {
            return {
              ...transaction,
            };
          }
        );

        console.log("formattedTransactions", formattedTransactions);

        setTransactions(formattedTransactions);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
