/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";

export interface ITransaction {
  id?: string;
  description: string;
  price: number;
  createdAt?: string;
  category: string;
  type: "income" | "outcome" | undefined;
}

export const createTransaction = async (transaction: ITransaction) => {
  await api
    .post("/transactions", transaction)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
export const editTransaction = async (transaction: ITransaction) => {
  await api
    .put(`/transactions/${transaction.id}`, transaction)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
export const deleteTransaction = async (id: string) => {
  await api
    .delete(`/transactions/${id}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
