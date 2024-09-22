import React from 'react';
import TaskList from './components/TaskList';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

const App = () => {
    return (
        <>
          <h1 className="slds-text-heading_medium slds-text-align_center slds-m-top_medium"
          style={{color: 'blue'}}>To-Do List App</h1>
          <div className="slds-grid slds-grid_align-center slds-grid_vertical-align-center slds-wrap slds-p-around_medium">   
            <div className="slds-col slds-size_1-of-2">
                <TaskList />
            </div>
        </div>
        </>

    );
};

export default App;



