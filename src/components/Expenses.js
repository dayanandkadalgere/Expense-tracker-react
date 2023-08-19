import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem
        id={props.id}
        key={props.id}
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </div>
  );
}
export default Expenses