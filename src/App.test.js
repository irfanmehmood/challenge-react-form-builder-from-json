import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Load", () => {
  test('app page load', () => {
    render(<App />);
    const linkElement = screen.getByText('Shift Form');
    expect(linkElement).toBeInTheDocument();
  });
})
