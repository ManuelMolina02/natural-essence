import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { SummaryCard, SummaryContainer } from "./styles";
import { BsCurrencyDollar } from "react-icons/bs";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <FaRegArrowAltCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 2.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <FaRegArrowAltCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 1.250,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <BsCurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 750,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
