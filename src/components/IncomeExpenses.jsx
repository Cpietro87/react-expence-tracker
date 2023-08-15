import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  // recoremos transacctions para obtener el valor amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div>
        <h3>Income</h3>
        <p>{income}</p>
      </div>
      <div>
        <h4> Expenses</h4>
        <p>{expenses}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
