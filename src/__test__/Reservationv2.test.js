import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReservationForm from '../components/reservation/ReservationForm';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ReservationForm', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      doctor: [
        {
          id: 1,
          name: 'John',
          lastname: 'Doe',
        },
      ],
    });
  });

  it('renders the reservation form', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ReservationForm />
        </BrowserRouter>
      </Provider>,
    );

    screen.debug();
    const title = getByTestId('title');
    expect(title).toBeInTheDocument();

    const cityInput = getByLabelText(/city/i);
    expect(cityInput).toBeInTheDocument();

    const datetimeInput = getByLabelText(/datetime/i);
    expect(datetimeInput).toBeInTheDocument();

    const doctorInput = getByLabelText(/doctor/i);
    expect(doctorInput).toBeInTheDocument();

    const userInput = getByLabelText(/username/i);
    expect(userInput).toBeInTheDocument();

    const reserveButton = getByText(/reserve/i);
    expect(reserveButton).toBeInTheDocument();
  });

  it('submits the form', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ReservationForm />
        </BrowserRouter>
      </Provider>,
    );

    const cityInput = getByLabelText(/city/i);
    fireEvent.change(cityInput, { target: { value: 'New York' } });

    const datetimeInput = getByLabelText(/datetime/i);
    fireEvent.change(datetimeInput, { target: { value: '2023-04-11T09:00' } });

    const reserveButton = getByText(/reserve/i);
    fireEvent.click(reserveButton);

    await waitFor(() => {
      const successMessage = getByText(/reservation created successfully/i);
      expect(successMessage).toBeInTheDocument();
    });
  });
});
