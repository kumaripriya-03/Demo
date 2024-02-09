import React, {useState, useEffect} from 'react';

import NewExpense from './component/NewExpense/NewExpense';

import Expenses from './component/Expenses/Expenses';

//  import Api from "./component/Api";
//  import Contact from "./component/Contact";
//  import About from "./component/About";

let DUMMY_EXPENSE = [];

const App = () => {
   
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

     useEffect(() =>{
      // 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => {
             return response.json();
        }
       ).then(
          data => {
              console.log(data);
              setExpenses(data);
          } 
       );
         
      },[]);
   
     

   const addExpenseHandler = (expense) =>{
        fetch('http://localhost/sample-api/api/create.php', {
          method: 'POST',
          body : JSON.stringify(expense),
          headers: {
            'content-Type' : 'application/json'
          }
        });  
   };


  return  (
  <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />


     {/* <Api/> 
      <About/> 
    <Contact/>   */}
    
       
    
    </>
  );
  
}

export default App;