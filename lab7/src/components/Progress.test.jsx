const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Progress = require('./Progress.jsx').default;

test('Progress renders counts and labels', () => {
  render(React.createElement(Progress, { tasks: [{ id: 1, done: true, difficulty: 'easy' }, { id: 2, done: false, difficulty: 'hard' }] }));
  expect(screen.getByText(/Done:/i)).toBeInTheDocument();
  expect(screen.getByText(/Total:/i)).toBeInTheDocument();
});

