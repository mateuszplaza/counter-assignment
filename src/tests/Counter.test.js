// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import Counter from '../components/Counter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counter = screen.getByText(/Counter/i);
    expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const counter = screen.getByTestId('count');
    expect(counter).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const plusButton = screen.getByRole('button', { name: '+' });
    const counter = screen.getByTestId('count');

    userEvent.click(plusButton);
    expect(counter).toHaveTextContent('1');

    userEvent.click(plusButton);
    expect(counter).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    const minusButton = screen.getByRole('button', { name: '-' });
    const counter = screen.getByTestId('count');

    userEvent.click(minusButton);
    expect(counter).toHaveTextContent('-1');

    userEvent.click(minusButton);
    expect(counter).toHaveTextContent('-2');
});
