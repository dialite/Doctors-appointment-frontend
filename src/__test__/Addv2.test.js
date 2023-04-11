import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Add from '../pages/Add/Add';
/* import { addDoctor } from '../redux/doctors/adds'; */
import '@testing-library/jest-dom';

describe('Add Component', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});

  test('should render Add form', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Add />
        </BrowserRouter>
      </Provider>,
    );

    const firstNameInput = getByLabelText(/First Name/i);
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = getByLabelText(/Last Name/i);
    expect(lastNameInput).toBeInTheDocument();

    const specialitySelect = getByLabelText(/Speciality/i);
    expect(specialitySelect).toBeInTheDocument();

    const experienceInput = getByLabelText(/Experience/i);
    expect(experienceInput).toBeInTheDocument();

    const consultationInput = getByLabelText(/Consultation Fee/i);
    expect(consultationInput).toBeInTheDocument();

    const nextButton = getByText(/Next/i);
    expect(nextButton).toBeInTheDocument();
  });

  test('should add doctor when Next button is clicked', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Add />
        </BrowserRouter>
      </Provider>,
    );

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const specialitySelect = getByLabelText(/Speciality/i);
    const experienceInput = getByLabelText(/Experience/i);
    const consultationInput = getByLabelText(/Consultation Fee/i);
    const nextButton = getByText(/Next/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(specialitySelect, { target: { value: 'Cardiologist' } });
    fireEvent.change(experienceInput, { target: { value: '5' } });
    fireEvent.change(consultationInput, { target: { value: '100' } });
    fireEvent.click(nextButton);

    /* redirect to /add2 after clicking nextButton */
    expect(window.location.pathname).toBe('/add2');

    // assert that the addDoctor action was dispatched
    // with the correct arguments
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'doctors/ADD_DOCTOR',
      payload: {
        name: 'John',
        lastname: 'Doe',
        speciality: 'Cardiologist',
        experience: '5',
        consultation: '100',
        image: '',
      },
    });
  });
});
