const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const TaskForm = require('./TaskForm.jsx').default;

test('TaskForm submits new task via add prop', () => {
  const add = jest.fn();
  render(React.createElement(TaskForm, { add, columns: [{ id: 1, title: 'To Do' }] }));
  const input = screen.getByPlaceholderText(/Add a new task\?/i);
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.submit(input.closest('form'));
  expect(add).toHaveBeenCalledWith('New Task', 1);
});

