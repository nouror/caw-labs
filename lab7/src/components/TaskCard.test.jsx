const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const TaskCard = require('./TaskCard.jsx').default;

test('TaskCard renders title and difficulty', () => {
  const task = { id: 1, title: 'Test task', done: false, difficulty: 'easy', subtasks: [] };
  render(React.createElement(TaskCard, { task, columnId: 1, delete: () => {}, reorderTask: () => {}, setTaskDone: () => {}, openTask: () => {} }));
  expect(screen.getByText(/Test task/i)).toBeInTheDocument();
  expect(screen.getByText(/easy/i)).toBeInTheDocument();
});
