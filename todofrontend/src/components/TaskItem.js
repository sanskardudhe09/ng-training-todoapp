import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
    if(!task) return null;
    if(task.assignedTo === '' || task.status === '' || task.dueDate === ''
    || task.priority === '' || task.description === ''){
        return;
    }
    return (
        <tr className="slds-hint-parent">
            <td><div className="slds-truncate">{task.assignedTo}</div></td>
            <td><div className="slds-truncate">{task.status}</div></td>
            <td><div className="slds-truncate">{task.dueDate.split('T')[0]}</div></td>  {/* Converting ISO Date format to yyyy-MM-dd format */}
            <td><div className="slds-truncate">{task.priority}</div></td>
            <td><div className="slds-truncate">{task.description}</div></td>
            <td>
                <button className="slds-button slds-button_neutral"  onClick={() => onEdit(task)}>Edit</button>
                <button className="slds-button slds-button_brand slds-m-left_medium" onClick={() => onDelete(task)}>Delete</button>
           </td>
        </tr>
    );
};

export default TaskItem;
