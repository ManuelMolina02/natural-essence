import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { SummaryCard, SummaryContainer } from "./styles";
import { BsCurrencyDollar } from "react-icons/bs";
import { formatterPrice } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <FaRegArrowAltCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{formatterPrice(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <FaRegArrowAltCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{formatterPrice(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Saldo</span>
          <BsCurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{formatterPrice(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
