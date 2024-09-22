import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteTaskModal from '.././src/components/DeleteTaskModal';
import { expect } from 'chai';

const mockTask = { _id: '1', assignedTo: 'John Doe' };

describe('DeleteTaskModal Component', () => {
  it('does not render when not open', () => {
    render(<DeleteTaskModal isOpen={false} selectedTask={mockTask} onClose={() => {}} />);
    expect(screen.queryByText('Confirm Action')).to.not.exist;
  });

  it('renders modal when open', () => {
    render(<DeleteTaskModal isOpen={true} selectedTask={mockTask} onClose={() => {}} />);
    expect(screen.getByText('Confirm Action')).to.exist;
  });

  it('calls handleDelete when confirm button is clicked', () => {
    const handleDelete = (id) => {
      expect(id).to.equal('1');
    };

    render(<DeleteTaskModal isOpen={true} selectedTask={mockTask} onClose={() => {}} handleDelete={handleDelete} />);

    fireEvent.click(screen.getByRole('button', { name: /Confirm/i }));
  });
});
