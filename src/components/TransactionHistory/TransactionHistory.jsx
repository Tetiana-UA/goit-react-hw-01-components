import { TransactionTable } from "./TransactionHistory.styled"


export const TransactionHistory = ({items}) => {
    const elements = items.map(item=><tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>)
    return (
<TransactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {elements}
  </tbody>
</TransactionTable>
    )
}