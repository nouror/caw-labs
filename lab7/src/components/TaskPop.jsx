import { useState } from 'react';
import {  FaTrash, FaCheckSquare, FaRegSquare } from 'react-icons/fa';


function TaskPop({ task, onClose, updateTask }) {

    const [title, setTitle] = useState(task.title);
    const [difficulty, setDifficulty] = useState(task.difficulty || 'easy');
    const [description, setDescription] = useState(task.description || '');
    const [subtasks, setSubtasks] = useState(task.subtasks || []);

    if (!task) return null;

    function addSubtask() {
      setSubtasks([...subtasks, '']);
    }

    function updateSubtask(index, value) {
      const newSubs = [...subtasks];
      newSubs[index] = value;
      setSubtasks(newSubs);
    }

    function toggleSubtaskDone(index) {
      const newSubs = [...subtasks];
      if (typeof newSubs[index] === 'string') newSubs[index] = { title: newSubs[index], done: false };
      newSubs[index].done = !newSubs[index].done;
      setSubtasks(newSubs);
    }

    function handleSave() {
      updateTask({
        ...task,
        title,
        description,
        difficulty,
        subtasks
      });
      onClose();
    }

    return (
      <div className="window">
        <div className="popup">
          <h2>Edit Task</h2>

          <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form"
               style={{ 
                color: 'black',
                backgroundColor: 'white',
        }}
          />

          <label className='lab'>Difficulty :</label>
          <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="options"
          >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
          </select>

          <label className='lab'>Description :</label>
          <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description..."
              className="form"
              style={{ textAlign: 'left',
                color: 'black',
                backgroundColor: 'white',
        }}
          />

          <label className='lab'>Subtasks :</label>
          <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '5px' }}>

          {subtasks.map((sub, i) => {
  const done = typeof sub === 'string' ? false : sub.done;
  const title = typeof sub === 'string' ? sub : sub.title;
  return (
    <div 
  key={i} 
  style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}

>
  <span
    onClick={() => toggleSubtaskDone(i)}
    style={{ cursor: 'pointer' }}
  >
    {typeof sub === 'string' || !sub.done ? <FaRegSquare size={22} /> : <FaCheckSquare size={22} />}
  </span>
  <input
    value={typeof sub === 'string' ? sub : sub.title}
    onChange={(e) => updateSubtask(i, e.target.value)}
    className="form"
    placeholder="Add a new subtask?"
style={{ flex: 1, 
            textDecoration: done ? 'line-through' : 'none',
            color: done ? '#85858598' : 'black',
            backgroundColor: 'white',
            textAlign: 'left'
        }}  />
  <button 
    onClick={() => {
      const newSubs = [...subtasks];
      newSubs.splice(i, 1);
      setSubtasks(newSubs);
    }}
    className="btn_x"
    style={{ backgroundColor: '#ffffe3' ,
      
     }}
  >
 <FaTrash />
  </button>
</div>
  );
})}
            </div>


          <button onClick={addSubtask} className="btn">+ Add subtask</button>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button onClick={onClose} className="btn_m"
                style={{ backgroundColor: '#ffffe3' }}
            >Close</button>
            <button onClick={handleSave} className="btn">Save</button>
          </div>
        </div>
      </div>
    );
}

export default TaskPop;
