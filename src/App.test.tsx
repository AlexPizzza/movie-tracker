import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello world!/i);
  expect(headerElement).toBeInTheDocument();
});
