import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { expect } from 'chai';

describe('TaskList Component', () => {
  it('renders task list', () => {
    render(<TaskList />);
    expect(screen.getByText('All Tasks')).to.exist;
  });

  it('renders add new task button', () => {
    render(<TaskList />);
    const addButton = screen.getByText('Add New');
    expect(addButton).to.exist;
  });

  it('opens add modal when Add New is clicked', () => {
    render(<TaskList />);
    const addButton = screen.getByText('Add New');
    fireEvent.click(addButton);
    expect(screen.getByText('Add New Task')).to.exist;
  });
});
