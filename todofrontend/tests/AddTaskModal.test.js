import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskModal from '.././src/components/AddTaskModal';
import { expect } from 'chai';
describe('AddTaskModal Component', () => {
  it('does not render when not open', () => {
    render(<AddTaskModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText('Add New Task')).to.not.exist;
  });

  it('renders modal when open', () => {
    render(<AddTaskModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText('Add New Task')).to.exist;
  });

  it('calls handleAddUpdate on form submit', () => {
    const handleAddUpdate = (task) => {
      expect(task.assignedTo).to.equal('John Doe');
    };

    render(<AddTaskModal isOpen={true} onClose={() => {}} handleAddUpdate={handleAddUpdate} />);

    fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'Sanskar Dudhe' } });
    fireEvent.submit(screen.getByRole('button', { name: /Save Task/i }));
  });
});
