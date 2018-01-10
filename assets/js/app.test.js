import './app';

jest.mock('react-dom', () => {
  return {
    render: jest.fn(),
  };
});

test("Render should be called", () => {
  const {render} = require('react-dom');
  expect(render).toHaveBeenCalled();
});