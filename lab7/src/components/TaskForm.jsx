import { useState } from 'react';


function TaskForm(props) {
  const [inputValue, setInputValue] = useState('');
  const [columnId, setColumnId] = useState(props.columns[0]?.id || 1);
  
  function submit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    props.add(inputValue, columnId);
    setInputValue('');
  }
  
 return (
  <form onSubmit={submit}>
    <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new task?"
      className='form'
    />
    <select 
      value={columnId} 
      onChange={e => setColumnId(Number(e.target.value))}
      className='options'
    >
      {props.columns.map(col => (
        <option key={col.id} value={col.id} >
          {col.title}
        </option>
      ))}
    </select>
    <button className='btn'>Add Task</button>
  </form>
);
}

export default TaskForm;