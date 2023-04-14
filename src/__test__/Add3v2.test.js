import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Add3 from '../pages/Add3/Add3';
import '@testing-library/jest-dom';

describe('Add3', () => {
  it('renders the component', () => {
    render(
      <BrowserRouter>
        <Add3 />
      </BrowserRouter>,
    );

    /* screen.debug(); */
    const heading2 = screen.getByRole('heading', { level: 2 });
    expect(heading2.textContent).toBe('Add Doctor - Step 3/3');

    const heading3 = screen.getByRole('heading', { level: 3 });
    expect(heading3.textContent).toBe('The doctor was added successfully!');

    const finishButton = screen.getByRole('button', { name: 'Finish' });
    expect(finishButton).toBeInTheDocument();
    expect(finishButton).toHaveAttribute('type', 'button');
    expect(finishButton).toHaveClass('add3Button');
  });
});
