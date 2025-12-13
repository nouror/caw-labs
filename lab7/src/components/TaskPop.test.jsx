const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const TaskPop = require('./TaskPop.jsx').default;

test('TaskPop renders edit header and task title', () => {
  const task = { id: 1, title: 'Test', difficulty: 'easy', description: '', subtasks: [] };
  render(React.createElement(TaskPop, { task, onClose: () => {}, updateTask: () => {} }));
  expect(screen.getByText(/Edit Task/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Test/i)).toBeInTheDocument();
});
