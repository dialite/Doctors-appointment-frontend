import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../pages/Login/Login';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

describe('Login component', () => {
  let store;
  let component;

  const authenticate = jest.fn();

  const users = [
    { id: '1', username: 'user1' },
    { id: '2', username: 'user2' },
    { id: '3', username: 'user3' },
  ];

  beforeEach(() => {
    store = mockStore({
      user: users,
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login authenticate={authenticate} />
        </BrowserRouter>
      </Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render login form', () => {
    const { getByTestId } = component;
    const loginForm = getByTestId('doctorLogin');

    expect(loginForm).toBeInTheDocument();
  });

  it('should show the select options', () => {
    const { getAllByRole } = component;
    const options = getAllByRole('option');

    expect(options).toHaveLength(4);
  });

  it('should call authenticate function and redirect to home on submit', async () => {
    const { getByTestId, getByLabelText } = component;

    const usernameSelect = getByLabelText('Username');
    fireEvent.change(usernameSelect, { target: { value: users[0].username } });

    const loginButton = getByTestId('loginButton');

    fireEvent.click(loginButton);

    await waitFor(() => expect(authenticate).toHaveBeenCalledWith(users[0]));
  });
});

describe('Login component with mocked navigation', () => {
  let store;
  let component;

  const authenticate = jest.fn();

  const users = [
    { id: '1', username: 'user1' },
    { id: '2', username: 'user2' },
    { id: '3', username: 'user3' },
  ];

  const mockNavigate = jest.fn();

  beforeAll(() => {
    jest.doMock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));
  });

  afterAll(() => {
    jest.dontMock('react-router-dom');
  });

  beforeEach(() => {
    store = mockStore({
      user: users,
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login authenticate={authenticate} />
        </BrowserRouter>
      </Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect to home on successful login', async () => {
    const { getByTestId, getByLabelText } = component;

    const usernameSelect = getByLabelText('Username');
    fireEvent.change(usernameSelect, { target: { value: 'user1' } });

    const loginButton = getByTestId('loginButton');

    fireEvent.click(loginButton);

    expect(window.location.pathname).toBe('/home');
  });
});
