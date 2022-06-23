import React from 'react'
import './App.css';

function App() {
  const numbers=[1,2,3,4,5,6,7,8,9]
  const operations=["+","-","*","/"]
  return (
    <div className="App">
      <main className='calculator'>
      <div className='display'>dddd
      </div>
      <div className='buttons'>
        <section className='left-side'>
          <div id='clear-btn'>Clear</div>
      <div className='numbers'>
        {numbers.map((val,key)=>{
          return <div id='indiv-number'>{val}</div>
        })}
      </div>
      </section>

      <section className='right-side'>
        {operations.map((val,key)=>{
          return <div id='operation'>{val}</div>
        })}
      </section>
      </div>
      </main>
    </div>
    
  );
}

export default App;
