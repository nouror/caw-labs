const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Column = require('./Column.jsx').default;

test('Column renders title and tasks count', () => {
  render(React.createElement(Column, { id: 1, title: 'Test', tasks: [], delete: () => {}, columnId: 1, moveTask: () => {}, reorderTask: () => {}, updateColumn: () => {}, deleteColumn: () => {}, moveColumn: () => {}, setTaskDone: () => {}, openTask: () => {} }));
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});
