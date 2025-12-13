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

  function handleDragStart(e) {
    e.dataTransfer.setData('columnId', props.id.toString());
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
    return; 
  }

  const columnId = Number(e.dataTransfer.getData('columnId'));
  if (columnId && columnId !== props.id) {
    props.moveColumn(columnId, props.id);
  }
}

  function handleDragLeave() {
    setIsDraggingOver(false);
  }

   return (
    <div 
      draggable="true"
      onDragStart={handleDragStart}
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
          <div className='col-header' onClick={() => setEdit(true)}>
            <span className='task-count'>{props.tasks.length}</span>
            <h2 className='col-title'>{props.title}</h2>
          </div>
        )}
        <button 
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete the column "${props.title}" ?`)) {
              props.deleteColumn(props.id);
            }
          }}
          className='btn_x2'
        >
          Delete
        </button>
      </div>
      
      <div>
        {props.tasks.map((task, index) => (
          <TaskCard 
            key={task.id}    
            task={task}
            delete={props.delete}
            columnId={props.id}
            reorderTask={props.reorderTask} 
            isFirst={index === 0}
            isLast={index === props.tasks.length - 1}
            setTaskDone={props.setTaskDone}
            openTask={props.openTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;