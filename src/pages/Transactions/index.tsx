import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td>Planilhas</td>
              <td>
                {" "}
                <PriceHighlight type="income">R$ 500,00</PriceHighlight>
              </td>
              <td>10/04/2021</td>
              <td>Venda</td>
              <td>Recebido</td>
            </tr>
            <tr>
              <td>Feira e carnes</td>
              <td>
                {" "}
                <PriceHighlight type="outcome">- R$ 500,00</PriceHighlight>
              </td>
              <td>10/04/2021</td>
              <td>Mercado</td>
              <td>Saída</td>
            </tr>
            <tr>
              <td>Remédios</td>
              <td>
                <PriceHighlight type="outcome">- R$ 300,00</PriceHighlight>
              </td>
              <td>10/04/2021</td>
              <td>Fármacia</td>
              <td>Saída</td>
            </tr>
            <tr>
              <td>Desenvolvimento de website</td>
              <td>
                <PriceHighlight type="income">R$ 1.500,00</PriceHighlight>
              </td>
              <td>10/04/2021</td>
              <td>Salário</td>
              <td>Recebido</td>
            </tr>
            <tr>
              <td>Bundinha do Bruno</td>
              <td>
                <PriceHighlight type="outcome">- R$ 30,00</PriceHighlight>
              </td>
              <td>10/04/2021</td>
              <td>Lazer</td>
              <td>Recebido</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
