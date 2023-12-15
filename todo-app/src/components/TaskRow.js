import './TaskRow.css'; // Import the CSS file
export const TaskRow = ({ task, toggleTask }) => {
    return (
      <tr>
      <td className='d-flex align-items-center justify-content-between'>
        {task.name}
        <div className="custom-checkbox">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => {
              toggleTask(task);
            }}
            id={`checkbox-${task.id}`}
            style={{ display: "none" }}
          />
          <label htmlFor={`checkbox-${task.id}`} className="checkbox-label">
            <div className={`checkbox-icon${task.done ? " checked" : ""}`}>
              {task.done && <div className="ok-letter">OK</div>}
            </div>
          </label>
        </div>
      </td>
    </tr>
    
    
    
    

    );
  };