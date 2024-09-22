import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskItem from '../components/TaskItem';
import { expect } from 'chai';

const mockTask = {
  assignedTo: 'Sanskar Dudhe',
  status: 'In Progress',
  dueDate: '2023-09-01T00:00:00.000Z',
  priority: 'High',
  description: 'Test Task',
};

describe('TaskItem Component', () => {
  it('renders task item details', () => {
    render(<TaskItem task={mockTask} />);
    expect(screen.getByText('Sanskar Dudhe')).to.exist;
    expect(screen.getByText('In Progress')).to.exist;
    expect(screen.getByText('2023-09-01')).to.exist;
    expect(screen.getByText('High')).to.exist;
    expect(screen.getByText('Test Task')).to.exist;
  });
});
