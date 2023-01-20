import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses,budget } = useContext(AppContext);
    const [new_budget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleChange = (e)=>{
        if(totalExpenses > new_budget){
            alert('You can not reduce the budget value lower the spending');
        }
        setNewBudget(parseInt(e.target.value));
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" max="20000" step="10" value={new_budget} onChange={handleChange}></input></span>
        </div>
    );
};
 
export default Budget;