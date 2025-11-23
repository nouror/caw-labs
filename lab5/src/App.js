import './App.css';

import { ClickMe, ToggleButton, ThreeButtons, Counter } from './Exo1.js';
import { DisplayTabQ1, DisplayTabQ2, DisplayTabQ3, DisplayTabQ4 } from './Exo2.js';
import { Form } from './Exo3.js';
import { DivCreator } from './Exo4.js';

function App() {
  const table1 = ["apple", "banana", "orange", "grape"];
  const table2 = ["red", "green", "blue", "yellow"];

  return (
    <div className="App">
     
      <header className="App-header">
        <h1>Lab 5 - React Components</h1>
      </header>

      {/* Exercise 1 */}
      <div className="exercise">
        <h2>Exercise 01</h2>
              
        <div className="sub-exercise">
          <h3>Q1.ClickMe Button</h3>
          <ClickMe />
        </div>
              
        <div className="sub-exercise">
          <h3>Q2.Toggle Button</h3>
          <ToggleButton />
        </div>
              
        <div className="sub-exercise">
          <h3>Q3.Three Buttons</h3>
          <ThreeButtons />
        </div>
              
        <div className="sub-exercise">
          <h3>Q4.Counter</h3>
          <Counter />
        </div>
      </div>
            
      {/* Exercise 2 - Step by Step */}
      <div className="exercise">
        <h2>Exercise 02</h2>
        
        <div className="sub-exercise">
          <h3>Q1.Display table as unordered list</h3>
          <DisplayTabQ1 />
        </div>
        
        <div className="sub-exercise">
          <h3>Q2.Rewrite the previous component</h3>
          <DisplayTabQ2 />
        </div>
        
        <div className="sub-exercise">
          <h3>Q3.Add click to remove element</h3>
          <p>Click any element to remove it:</p>
          <DisplayTabQ3 />
        </div>
        
        <div className="sub-exercise">
          <h3>Q4.Parameterize the DisplayTab</h3>
          <DisplayTabQ4 tab={table1} />
        </div>
        
        <div className="sub-exercise">
          <h3>Q5.Two DisplayTab components with different tables</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <h4>Table 1</h4>
              <DisplayTabQ4 tab={table1} />
            </div>
            <div>
              <h4>Table 2</h4>
              <DisplayTabQ4 tab={table2} />
            </div>
          </div>
        </div>
      </div>
            
      {/* Exercise 3 */}
      <div className="exercise">
        <h2>Exercise 3</h2>
        <Form/>
      </div>
            
      {/* Exercise 4 */}
      <div className="exercise">
        <h2>Exercise 4</h2>
        <DivCreator/>
      </div>
    </div>
  );
}

export default App;
