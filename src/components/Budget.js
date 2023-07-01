import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [budgetAmt, setBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const OnBudgetChange = (event) => {
        const budgetVal = event.target.value;
        if (budgetVal > 20000) {
            alert("The Budget value cannot exceed £20000");
        } else if (budgetVal < totalExpenses) {
            alert("The Budget value cannot be lower that the spent amout £" + totalExpenses);
        } else {
            setBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span className='flex'>
                Budget: £<input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budgetAmt}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => OnBudgetChange(event)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
