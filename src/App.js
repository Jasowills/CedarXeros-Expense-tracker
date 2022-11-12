import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './Components/Budget';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import RemainingBudget from './Components/Remaining';
import Button from './Components/Button';
import 'animate.css';
// import { Button } from 'bootstrap';
const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3  d-flex align-items-center animate__animated animate__slideInLeft reduce'><span class="text-danger">Cedar</span>Xeros Budget  Planner &nbsp;
          <Button /></h1>
        <div className='row mt-3'>
          <div className='col-sm animate__animated animate__fadeInUp'>
            <Budget />
          </div>
          <div className='col-sm animate__animated animate__fadeInDown'>
            <RemainingBudget />
          </div>
          <div className='col-sm animate__animated animate__fadeInUp'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3 whiter animate__animated animate__fadeInLeft'>Expenses</h3>
        <div className='row animate__animated animate__fadeInRight'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3 whiter animate__animated animate__slideInUp'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        
        </div>
      </div>
    </AppProvider>
  );
};


function close() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
export default App;


