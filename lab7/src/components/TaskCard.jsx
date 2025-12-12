import { useState } from 'react';

function TaskCard(props) {
  const [isDragging, setIsDragging] = useState(false);
  
  function handleDragStart(e) {
    e.dataTransfer.setData('taskId', props.task.id.toString());
    e.dataTransfer.setData('fromColumnId', props.columnId.toString());
    setIsDragging(true);
  }
  
  function handleDragEnd(e) {
    setIsDragging(false);
  }
  
  function handleDelete() {
     props.delete(props.task.id);
    
  }
  
  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className='dlt2'
    >
      <span>{props.task.title}</span>
      <div>
        <button 
          onClick={handleDelete}
          className='btn_x'
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TaskCard;