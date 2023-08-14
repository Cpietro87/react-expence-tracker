import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionForm() {

  const { addTransaction } = useGlobalState()
  const[description, setDescription] = useState('');
  const [amout, setAmout] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: 1,
      description,
      amout
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Description" 
        onChange={(e) => setDescription(e.target.value)}/>
        <input type="number" step={0.01} placeholder="Amout" 
        onChange={(e) => setAmout(e.target.value)} />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
