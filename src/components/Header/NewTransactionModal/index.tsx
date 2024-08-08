import { Heading, Input } from "@pandora-box-tecadi/desing-ui-react";
import {
  AddTransactionButton,
  NewTransactionModalContainer,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { useState } from "react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

export function NewTransactionModal() {
  const [formData, setFormData] = useState<{
    title: string;
    value: number;
    category: string;
    type: "income" | "outcome" | undefined;
  }>({
    title: "",
    value: 0,
    category: "",
    type: undefined,
  });
  return (
    <NewTransactionModalContainer>
      <Heading size="lg">Nova transação</Heading>
      <form>
        <Input colorSchema="teal" placeholder="Título" />
        <Input colorSchema="teal" placeholder="Valor" />
        <Input colorSchema="teal" placeholder="Categoria" />

        <TransactionType>
          <TransactionTypeButton
            type="button"
            variant="income"
            isActive={formData.type === "income"}
            onClick={() => setFormData({ ...formData, type: "income" })}
          >
            <FaRegArrowAltCircleUp size={22} />
            Entrada
          </TransactionTypeButton>
          <TransactionTypeButton
            type="button"
            variant="outcome"
            isActive={formData.type === "outcome"}
            onClick={() => setFormData({ ...formData, type: "outcome" })}
          >
            <FaRegArrowAltCircleDown size={22} />
            Saída
          </TransactionTypeButton>
        </TransactionType>

        <AddTransactionButton>Cadastrar</AddTransactionButton>
      </form>
    </NewTransactionModalContainer>
  );
}
