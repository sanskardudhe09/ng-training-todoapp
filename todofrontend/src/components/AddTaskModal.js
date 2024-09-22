import React from 'react'
import TaskForm from './TaskForm';
import {editTask, addTask} from '../services/TodoService'
const AddTaskModal = ({ isOpen, selectedTask, onClose, handleAddUpdate }) => {
    if (!isOpen) return null;
    return (
        <div className="slds-modal slds-fade-in-open">
            <div className="slds-modal__container">

                <div className="slds-modal__header">
                    <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close" onClick={onClose}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        <span className="slds-assistive-text">Close</span>
                    </button>
                    <h2 className="slds-text-heading_medium">Add New Task</h2>
                </div>
                <div className="slds-modal__content slds-p-around_medium">
                    <TaskForm onSubmit={handleAddUpdate} selectedTask={selectedTask} />
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal