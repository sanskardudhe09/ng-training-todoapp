import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { addTask, deleteTask, editTask, fetchTasks } from '../services/TodoService';
import EditTaskModal from './EditTaskModal';
import AddTaskModal from './AddTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 5; // Set limit per page
    useEffect(() => {
        getAllTasks();
    }, [currentPage]);
     /** Functions that calls Todo Service methods
      to connect with Node Backend API for CRUD operations
      */
    const getAllTasks = async () => {
        const response = await fetchTasks(currentPage, limit);
        console.log(response.data);
        setTasks(response.data.tasks);
        setTotalPages(response.data.totalPages);
    }
    const handleDelete = async (id) => {
        await deleteTask(id);
        setIsDeleteModalOpen(false);
        getAllTasks();
    }
    const handleAddUpdate = async (task) => {
        if (selectedTask) {
            //setIsEditModalOpen(true);
            await editTask(selectedTask._id, task);
            setIsEditModalOpen(false);
            getAllTasks();
        } else {
            //setIsAddModalOpen(true);
            await addTask(task);
            setIsAddModalOpen(false);
            getAllTasks();
        }
    }
    /** Utility functions for opening modals for add, edit, delete task */
    const openAddNewModal = (task = null) => {
        setSelectedTask(task);
        setIsAddModalOpen(true);
    };
    const openEditModal = (task = null) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    }
    const openDeleteModal = (task = null) => {
        setSelectedTask(task);
        setIsDeleteModalOpen(true);
    }
    /** Utility functions for handling paginaton */
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleLast = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="slds-card center-container slds-scrollable_y">
            <div className="slds-card__header slds-grid slds-grid_align-center">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                        <svg className="w-6 h-6 text-blue-1000 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            style={{ fontSize: '30px' }} width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path stroke="blue" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
                        </svg>
                    </div>
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <div className="slds-card__header-link ">
                                <span>All Tasks</span>
                            </div>
                        </h2>
                    </div>
                    <div className="slds-no-flex">
                        <button className="slds-button slds-button_neutral" onClick={() => openAddNewModal()}>Add New</button>
                    </div>
                </header>
            </div>
            <table className="slds-table slds-table_bordered slds-table_cell-buffer slds-table_fixed-layout">
                <thead>
                    <tr className="slds-line-height_reset">
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Assigned To</div></th>
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Status</div></th>
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Due Date</div></th>
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Priority</div></th>
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Comments</div></th>
                        <th scope="col"><div className="slds-truncate" style={{ fontSize: '15px' }}>Action</div></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <TaskItem key={task._id} task={task} onEdit={() => openEditModal(task)} onDelete={() => openDeleteModal(task)} />
                    ))}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="slds-grid slds-m-top_medium slds-grid_align-center">
                <button
                    className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={handlePrev}
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                    className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
                <button
                    className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={handleLast}
                    disabled={currentPage === totalPages}>
                    Last
                </button>
            </div>
            {/** Modal popups for adding new task, editing task and deleting a task */}
            {openAddNewModal && <AddTaskModal isOpen={isAddModalOpen}
                selectedTask={selectedTask}
                onClose={() => setIsAddModalOpen(false)}
                handleAddUpdate={handleAddUpdate} />}

            {openEditModal && <EditTaskModal isOpen={isEditModalOpen}
                selectedTask={selectedTask}
                onClose={() => setIsEditModalOpen(false)}
                handleAddUpdate={handleAddUpdate}
            />}
            {openDeleteModal && <DeleteTaskModal isOpen={isDeleteModalOpen}
                selectedTask={selectedTask}
                onClose={() => setIsDeleteModalOpen(false)}
                handleDelete={handleDelete}
            />}
        </div>
    );
};

export default TaskList;
