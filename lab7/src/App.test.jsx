const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const App = require('./App.jsx').default;

test('App renders heading', () => {
  render(React.createElement(App));
  expect(screen.getByText(/Kanban Boards/i)).toBeInTheDocument();
});
