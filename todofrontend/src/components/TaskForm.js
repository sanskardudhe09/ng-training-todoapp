import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, selectedTask }) => {
    const [formData, setFormData] = useState({
        assignedTo: '',
        status: 'Not Started',
        dueDate: '',
        priority: 'Low',
        description: ''
    });

    useEffect(() => {
        if (selectedTask) {
            setFormData(selectedTask);
        }
    }, [selectedTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="slds-form slds-form_compound" onSubmit={handleSubmit}>
            <fieldset className="slds-form-element">
                <legend className="slds-form-element__legend slds-form-element__label"
                    style={{ fontSize: '20px' }}>Task Details</legend>
                <div className="slds-form-element__control">
                    <div className="slds-grid slds-gutters">
                        <div className="slds-col slds-size_1-of-2">
                            <label className="slds-form-element__label" htmlFor="assignedTo"
                                style={{ fontSize: '15px' }}>Assigned To</label>
                            <input type="text" id="assignedTo" name="assignedTo" className="slds-input" value={formData.assignedTo} onChange={handleChange} placeholder="Assigned To" />
                        </div>
                        <div className="slds-col slds-size_1-of-2">
                            <label className="slds-form-element__label" htmlFor="status"
                                style={{ fontSize: '15px' }}>Status</label>
                            <div className="slds-select_container">
                                <select id="status" name="status" className="slds-select" value={formData.status} onChange={handleChange}>
                                    <option value="Not Started">Not Started</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="slds-grid slds-gutters">
                        <div className="slds-col slds-size_1-of-2">
                            <label className="slds-form-element__label" htmlFor="dueDate"
                                style={{ fontSize: '15px' }}>Due Date</label>
                            <input type="date" id="dueDate" name="dueDate" className="slds-input" value={formData.dueDate.split('T')[0]} onChange={handleChange} placeholder="Due Date" />
                        </div>
                        <div className="slds-col slds-size_1-of-2">
                            <label className="slds-form-element__label" htmlFor="priority"
                                style={{ fontSize: '15px' }}>Priority</label>
                            <div className="slds-select_container">
                                <select id="priority" name="priority" className="slds-select" value={formData.priority} onChange={handleChange}>
                                    <option value="Low">Low</option>
                                    <option value="Normal">Normal</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="description"
                            style={{ fontSize: '15px' }}>Comments</label>
                        <textarea id="description" name="description" className="slds-textarea" value={formData.description} onChange={handleChange} placeholder="Task Description"></textarea>
                    </div>

                    <button className="slds-button slds-button_brand" type="submit">
                        Save Task
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

export default TaskForm;
