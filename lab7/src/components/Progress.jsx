function Progress({ tasks }) {

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const left = total - done;

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  const easyLeft = tasks.filter(t => !t.done && t.difficulty === 'easy').length;
  const mediumLeft = tasks.filter(t => !t.done && t.difficulty === 'medium').length;
  const hardLeft = tasks.filter(t => !t.done && t.difficulty === 'hard').length;

  return (
    <div className="progress-box">
      
      <div 
        className="progress-circle"
        style={{
          background: `conic-gradient( #000000ff ${percent}%, #333333bb ${percent}%)`
        }}
      >
        {percent}%
      </div>
      <div>
      <div
        style={{ 
            marginTop: '10px',
            display: 'flex',
            gap: '10px'
         }}
      >      
        <p>Done: <strong>{done}/{total}</strong></p>
        <p>Total: <strong>{total}</strong></p>
        <p>Left: <strong>{left}</strong></p>
        </div>
      <div className="progress-details">
        <p>Easy: 
            <strong style={{ color: '#00d2e1ff' }}>   {easyLeft} </strong>
        </p>
        <p>Medium: 
            <strong style={{ color: 'orange' }}> {mediumLeft} </strong>
        </p>
        <p>Hard: 
            <strong style={{ color: 'red' }}> {hardLeft} </strong>
        </p>
      </div>
        </div>
    </div>
  );
}

export default Progress;
