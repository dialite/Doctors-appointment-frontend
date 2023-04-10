import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../pages/home/Home';
import { getAllDoctors } from '../redux/doctors/doctors';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

describe('Home component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      doctor: [
        {
          id: 1,
          name: 'John',
          lastname: 'Doe',
          speciality: 'Cardiology',
          image: 'https://example.com/doctor1.jpg',
        },
        {
          id: 2,
          name: 'Jane',
          lastname: 'Smith',
          speciality: 'Pediatrics',
          image: 'https://example.com/doctor2.jpg',
        },
      ],
    });

    return store.dispatch(getAllDoctors());
  });

  it('should render the title and subtitle', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('title')).toHaveTextContent('DOCTORS ONLINE');
    expect(screen.getByTestId('subtitle')).toHaveTextContent('Find the best doctors in your area');
  });

  it('should render the doctors', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('doctorContainer')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
