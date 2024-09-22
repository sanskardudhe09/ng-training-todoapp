import React from 'react'

const DeleteTaskModal = ({ isOpen, selectedTask, onClose, handleDelete }) => {
    if (!isOpen) return null;
    return (
        <>
            <section className="slds-modal slds-fade-in-open" id="confirmationModal" role="dialog" aria-labelledby="modal-heading" aria-modal="true" aria-hidden="true" >
                <div className="slds-modal__container">
                    <header className="slds-modal__header">
                        <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close" onClick={onClose}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            <span className="slds-assistive-text">Close</span>
                        </button>
                        <h2 id="modal-heading" className="slds-text-heading_medium">Confirm Action</h2>
                    </header>


                    <div className="slds-modal__content slds-p-around_medium">
                        <p>Are you sure you want to delete this item?</p>
                    </div>
                    <footer className="slds-modal__footer">
                        <button className="slds-button slds-button_neutral" onClick={onClose}>Cancel</button>
                        <button className="slds-button slds-button_brand" onClick={() => handleDelete(selectedTask._id)}>Confirm</button>
                    </footer>

                </div>
            </section>


            <div className="slds-backdrop slds-backdrop_open" id="modalBackdrop" style={{ display: 'none' }}></div>
        </>
    );
}

export default DeleteTaskModal