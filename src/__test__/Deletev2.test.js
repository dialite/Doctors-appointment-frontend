import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Delete from '../pages/Delete/Delete';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([thunk]);

describe('Delete component', () => {
  let store;

  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));

  beforeEach(() => {
    store = mockStore({
      doctor: [
        {
          id: 1,
          name: 'John',
          lastname: 'Doe',
          speciality: 'Cardiology',
        },
        {
          id: 2,
          name: 'Jane',
          lastname: 'Doe',
          speciality: 'Pediatrics',
        },
      ],
    });
  });

  it('should render two delete buttons initially', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Delete />
      </Provider>,
    );
    const deleteButtons = getAllByTestId('delete-button');
    expect(deleteButtons.length).toBe(2);
  });
});
