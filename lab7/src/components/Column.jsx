import { useState } from 'react';
import TaskCard from './TaskCard';

function Column(props) {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  function updateTitle() {
    props.updateColumn(props.id, newTitle);
    setEdit(false);
  }


  function handleDragOver(e) {
    e.preventDefault();
    setIsDraggingOver(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDraggingOver(false);
    
    const taskId = Number(e.dataTransfer.getData('taskId'));
    if (taskId) {
      props.moveTask(taskId, props.id);
    }
  }

  function handleDragLeave() {
    setIsDraggingOver(false);
  }

   return (
    <div 

      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      className='col'      
    >
      <div className='dlt'>
        {edit ? (
          <input 
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onBlur={updateTitle}
            className='form'
          />
        ) : (
          <h2 onClick={() => setEdit(true)}>
            {props.title}
          </h2>
        )}
        <button 
          onClick={() => props.deleteColumn(props.id)}
          className='btn_x'
        >
          Delete
        </button>
      </div>
      
      <div>
        {props.tasks.map(task => (
          <TaskCard 
            key={task.id}    
            task={task}
            delete={props.delete}
            columnId={props.id}  
          />
        ))}
      </div>
    </div>
  );
}

export default Column;