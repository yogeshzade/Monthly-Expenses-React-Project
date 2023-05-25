import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from './Card';
function Expenses() {

    const expenses = [
        {
          id: "e1",
          title: "Car Insurance",
          amount: 100,
          date: new Date(2020, 2, 15),
        },
        {
          id: "e2",
          title: "Home Rent",
          amount: 520,
          date: new Date(2021, 5, 25),
        },
        {
          id: "e3",
          title: "Renovation",
          amount: 5266,
          date: new Date(2022, 9, 1),
        },
        {
          id: "e4",
          title: "Buing Car",
          amount: 854,
          date: new Date(2023, 4, 5),
        },
      ];

  return (
    <Card className="expenses">
    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  )
}

export default Expenses;