import { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaTrash, FaCheckSquare, FaRegSquare } from 'react-icons/fa';

function TaskCard(props) {
  const [isDragging, setIsDragging] = useState(false);
  const totalSubs = props.task.subtasks?.length || 0;
  const doneSubs = props.task.subtasks?.filter(s => s.done).length || 0;

  function handleDragStart(e) {
    e.dataTransfer.setData('taskId', props.task.id.toString());
    e.dataTransfer.setData('fromColumnId', props.columnId.toString());
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  function handleDelete() {
    props.delete(props.task.id);
  }

  function toggleDone() {
    props.setTaskDone(props.task.id, !props.task.done);
  }

  return (
    <div
      onClick={() => props.openTask(props.task)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className='dlt2'
      style={{ 
              textDecoration: props.task.done ? 'line-through' : 'none',
              color: props.task.done ? '#85858598' : 'black',
        }}
    >
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          lineHeight: '1',
        }}
      >
        <span
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            toggleDone();
          }}
        >
          {props.task.done ? <FaCheckSquare size={22} /> : <FaRegSquare size={22} />}
        </span>

        <div 
          onClick={() => props.openTask(props.task)}
          style={{ cursor: 'pointer', textAlign: 'left' }}
        >
          <div>{props.task.title}</div>

          
          <div style={{ 
            fontSize: '12px',
            color: '#777',
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
          }}>
            <span
              style={{ 
                textTransform: 'uppercase',
                color: 
                  props.task.difficulty === 'easy' ? '#00d2e1ff' :
                  props.task.difficulty === 'medium' ? 'orange' :
                  'red'
            }}
            >{props.task.difficulty}</span>

            {totalSubs > 0 && (
              <span>{doneSubs}/{totalSubs} subtasks</span>
            )}
            
          </div>
        </div>


      </div>

    <div>
      {!props.isFirst && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.reorderTask(props.task.id, 'up');
          }}
          className='btn_m'
        >
          <FaArrowUp />
        </button>
      )}

      {!props.isLast && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.reorderTask(props.task.id, 'down');
          }}
          className='btn_m'
        >
          <FaArrowDown />
        </button>
      )}

      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
        className='btn_x'
      >
        <FaTrash />
      </button>
    </div>

    </div>
  );
}


export default TaskCard;