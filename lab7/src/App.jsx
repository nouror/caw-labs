import { useState } from 'react';
import TaskForm from './components/TaskForm';
import Column from './components/Column';
import './App.css';


function App() {
  const [allTasks, setAllTasks] = useState([]);

  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', editable: true },
    { id: 2, title: 'In Progress', editable: true },
    { id: 3, title: 'Done', editable: true }
  ]);
  const [nextColumnId, setNextColumnId] = useState(1);
  const [newColumnName, setNewColumnName] = useState("");


  function addTask(title, columnId) {  
    const newTask = {
      id: Date.now(),
      title: title,
      columnId: columnId
    };
    setAllTasks([...allTasks, newTask]);
  }

  
  function deleteTask(taskId) {    
  setAllTasks(allTasks.filter(t => t.id !== taskId));
  }
 

  function addColumn() {
    if (newColumnName.trim() === "") return;

    const newColumn = {
      id: nextColumnId,
      title: newColumnName,
      editable: true
    };
    setColumns([...columns, newColumn]);
    setNextColumnId(nextColumnId + 1);
    setNewColumnName("");
  }
  

  function deleteColumn(columnId) {
    setColumns(columns.filter(col => col.id !== columnId));
    setAllTasks(allTasks.filter(t => t.columnId !== columnId));
  }
  

  function updateColumn(columnId, newTitle) {
    setColumns(columns.map(col => 
      col.id === columnId ? { ...col, title: newTitle } : col
    ));
  }


function moveTask(taskId, newColumnId) {
  setAllTasks(allTasks.map(task => {
    if (task.id === taskId) {
      return { ...task, columnId: newColumnId };
    }
    return task;
  }));
}


return (
  <div>
    
    <h1>Kanban Boards</h1>
    
    {!columns.length ? (
      <div>
        <p>Start Now! Create your first column</p>
        <div>
          <input
            type="text"
            placeholder="Enter column name"
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
            className='form'
          />
          <button onClick={addColumn} className='btn'>
            Add Column
          </button>
        </div>
      </div>
    ) : (
      <>
      <div
        className='input_text'
      >

        <TaskForm add={addTask} columns={columns} />

        <div>
          <input
            type="text"
            placeholder="Enter column name"
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
            className='form'

          />
          <button onClick={addColumn} className='btn' >
            Add Column
          </button>
        </div>
      </div>
        <div className='container'>
          {columns.map(col => (
            <Column
              key={col.id}
              id={col.id}
              title={col.title}
              tasks={allTasks.filter(task => task.columnId === col.id)}
              delete={deleteTask}
              deleteColumn={deleteColumn}
              updateColumn={updateColumn}
              moveTask={moveTask}
              />
          ))}
        </div>
        
      </>
    )}
  </div>
);

}
export default App;