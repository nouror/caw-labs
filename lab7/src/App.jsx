import { useState } from 'react';
import TaskForm from './components/TaskForm';
import Column from './components/Column';
import './App.css';
import TaskPop from './components/TaskPop';
import Progress from './components/Progress';


function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', editable: true },
    { id: 2, title: 'In Progress', editable: true },
    { id: 3, title: 'Done', editable: true }
  ]);
  const [nextColumnId, setNextColumnId] = useState(4);
  const [newColumnName, setNewColumnName] = useState("");


  function addTask(title, columnId) {  
    const newTask = {
      id: Date.now(),
      title: title,
      columnId: columnId,
      done: columnId === 3,
      difficulty: 'medium', 
      subtasks: [],         
      description: '' 
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

  function updateTask(arg1, arg2, arg3) {
  // support two forms:
  // 1) updateTask(taskObject)  -> replace/merge whole task (used by TaskPop)
  // 2) updateTask(taskId, field, value) -> update single field (existing usage)
  if (typeof arg1 === 'object' && arg1 !== null) {
    const updatedTask = arg1;
    setAllTasks(prev => prev.map(t => t.id === updatedTask.id ? { ...t, ...updatedTask } : t));
  } else {
    const taskId = arg1;
    const field = arg2;
    const value = arg3;
    setAllTasks(prev => prev.map(t => t.id === taskId ? { ...t, [field]: value } : t));
  }
}


function moveTask(taskId, newColumnId) {
  setAllTasks(allTasks.map(task => {
    if (task.id === taskId) {
      return { 
        ...task, 
        columnId: newColumnId, 
        done: newColumnId === 3 ? true : task.done 
      };
    }
    return task;
  }));
}

function moveColumn(draggedId, targetId) {
  setColumns(prev => {
    const columnsCopy = [...prev];
    const fromIndex = columnsCopy.findIndex(c => c.id === draggedId);
    const toIndex = columnsCopy.findIndex(c => c.id === targetId);
    const [draggedColumn] = columnsCopy.splice(fromIndex, 1);
    columnsCopy.splice(toIndex, 0, draggedColumn);
    return columnsCopy;
  });
}


function reorderTask(taskId, direction) {
  setAllTasks(prevTasks => {
    const tasks = [...prevTasks];
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return tasks;

    const task = tasks[taskIndex];
    const columnTasks = tasks
      .filter(t => t.columnId === task.columnId)
      .sort((a, b) => tasks.indexOf(a) - tasks.indexOf(b));
    
    const indexInColumn = columnTasks.findIndex(t => t.id === taskId);

    if (direction === 'up' && indexInColumn > 0) {
      const targetTask = columnTasks[indexInColumn - 1];
      const i = tasks.indexOf(task);
      const j = tasks.indexOf(targetTask);
      [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }

    if (direction === 'down' && indexInColumn < columnTasks.length - 1) {
      const targetTask = columnTasks[indexInColumn + 1];
      const i = tasks.indexOf(task);
      const j = tasks.indexOf(targetTask);
      [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }

    return tasks;
  });
}

function setTaskDone(taskId, done) {
  setAllTasks(prev => 
    prev.map(task => task.id === taskId ? { ...task, done } : task)
  );
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
        <Progress tasks={allTasks} />
      </div>
        <div className='container'>
          {columns.map(col => (
            <Column
              key={col.id}
              id={col.id}
              title={col.title}
              tasks={allTasks.filter(task => task.columnId === col.id)}
              delete={deleteTask}
              columnId={col.id}
              moveTask={moveTask}
              reorderTask={reorderTask} 
              updateColumn={updateColumn}
              deleteColumn={deleteColumn}
              moveColumn={moveColumn}
              setTaskDone={setTaskDone}
              openTask={setSelectedTask}
            />
          ))}
        </div>
        
      </>
    )}

    {selectedTask && (
      <TaskPop 
        task={selectedTask} 
        onClose={() => setSelectedTask(null)} 
        updateTask={updateTask} 
      />
    )}
    

  </div>
);

}
export default App;