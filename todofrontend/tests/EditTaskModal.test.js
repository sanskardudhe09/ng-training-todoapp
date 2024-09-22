import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditTaskModal from '.././src/components/EditTaskModal';
import { expect } from 'chai';

describe('EditTaskModal Component', () => {
  it('does not render when not open', () => {
    render(<EditTaskModal isOpen={false} selectedTask={null} onClose={() => {}} />);
    expect(screen.queryByText('Edit Task')).to.not.exist;
  });

  it('renders modal when open', () => {
    render(<EditTaskModal isOpen={true} selectedTask={null} onClose={() => {}} />);
    expect(screen.getByText('Edit Task')).to.exist;
  });

  it('calls handleAddUpdate on form submit', () => {
    const handleAddUpdate = (task) => {
      expect(task.assignedTo).to.equal('John Doe');
    };

    render(<EditTaskModal isOpen={true} selectedTask={null} onClose={() => {}} handleAddUpdate={handleAddUpdate} />);

    fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'Sanskar Dudhe' } });
    fireEvent.submit(screen.getByRole('button', { name: /Save Task/i }));
  });
});
