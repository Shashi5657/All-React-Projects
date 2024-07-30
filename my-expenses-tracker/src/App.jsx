import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </>
  );
}

export default App;
