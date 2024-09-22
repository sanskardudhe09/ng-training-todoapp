import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import { expect } from 'chai';

describe('TaskForm Component', () => {
  it('renders task form', () => {
    render(<TaskForm onSubmit={() => {}} />);
    expect(screen.getByLabelText('Assigned To')).to.exist;
    expect(screen.getByLabelText('Status')).to.exist;
    expect(screen.getByLabelText('Due Date')).to.exist;
    expect(screen.getByLabelText('Priority')).to.exist;
    expect(screen.getByLabelText('Comments')).to.exist;
  });

  it('submits form data on save', () => {
    const handleSubmit = (formData) => {
      expect(formData.assignedTo).to.equal('John Doe');
    };

    render(<TaskForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'Sanskar Dudhe' } });
    fireEvent.submit(screen.getByRole('button', { name: /Save Task/i }));
  });
});
