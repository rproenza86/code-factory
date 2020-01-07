import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders moto', () => {
    const { getByText } = render(<App />);
    const moto = getByText(/Building Web Applications/i);
    expect(moto).toBeInTheDocument();
});
