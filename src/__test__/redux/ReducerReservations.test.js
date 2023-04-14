import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllReservations, updateReservation } from '../../redux/doctors/reservations';

describe('reservations slice', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        reservations: reducer,
      },
    });
  });

  beforeEach(() => {
    store.dispatch(getAllReservations()); // Dispatch getAllReservations to populate the store
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all reservations from the API and update state', async () => {
    // Arrange
    const mockReservations = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockReservations),
    }));

    // Act
    await store.dispatch(getAllReservations());

    // Assert
    expect(global.fetch).toHaveBeenCalledWith('https://doctor-t64q.onrender.com/api/v1/appointments', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    expect(store.getState().reservations).toEqual(mockReservations);

    // Clean up
    global.fetch.mockRestore();
  });

  it('should update a reservation in state', () => {
    // Arrange
    const initialState = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    const updatedReservation = { id: 2, title: 'Updated Movie 2' };
    const expectedState = { id: 2, title: 'Updated Movie 2' };

    // Act
    const action = updateReservation(updatedReservation);
    const newState = reducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
  });
});
