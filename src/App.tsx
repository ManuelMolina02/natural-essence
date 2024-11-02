import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { FormGuide } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <FormGuide />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
