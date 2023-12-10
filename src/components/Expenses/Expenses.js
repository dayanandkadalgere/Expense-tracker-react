import ExpenseItem from "../Expenses/ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="bg-gray-300 p-2">
      <ExpenseItem
        id={props.id}
        key={props.id}
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </div>
  );
};
export default Expenses;
