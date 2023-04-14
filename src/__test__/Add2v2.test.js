import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Add2 from '../pages/Add2/Add2';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([thunk]);

describe('Add2 component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      add: {},
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Add2 />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render "Add Doctor - Step 2/3" heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe('Add Doctor - Step 2/3');
  });

  it('should render the "Select doctor\'s image" section', () => {
    const imageSection = screen.getByRole('heading', { level: 3, name: "Select doctor's image" });
    expect(imageSection).toBeInTheDocument();
  });
});
