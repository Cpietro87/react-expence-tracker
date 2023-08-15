import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transaction/TransactionForm";
import TransactionList from "./components/Transaction/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <IncomeExpenses/>
      <Balance/>
      <TransactionForm/>
      <TransactionList/>
      <h1>Hello Provider</h1>
    </GlobalProvider>
  )
}

export default App