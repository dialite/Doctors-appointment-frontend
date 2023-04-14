import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MyReservations from '../pages/MyReservations/MyReservations';

describe('MyReservations Component', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    reservation: [
      {
        id: 1, user_id: 1, doctor_id: 1, city: 'New York', datetime: '2022-01-01T10:00:00Z',
      },
      {
        id: 2, user_id: 1, doctor_id: 2, city: 'Los Angeles', datetime: '2022-01-02T14:00:00Z',
      },
      {
        id: 3, user_id: 2, doctor_id: 1, city: 'Chicago', datetime: '2022-01-03T12:00:00Z',
      },
    ],
    doctor: [
      { id: 1, name: 'John', lastname: 'Doe' },
      { id: 2, name: 'Jane', lastname: 'Doe' },
    ],
  });

  beforeEach(() => {
    const user = { id: 1 };
    localStorage.setItem('user', JSON.stringify(user));
  });

  afterEach(() => {
    localStorage.removeItem('user');
  });

  it('should render the reservations for the user', () => {
    const { queryAllByRole } = render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    );
    const reservations = queryAllByRole('row');
    expect(reservations).toHaveLength(3); // Includes the table header row
  });
});
