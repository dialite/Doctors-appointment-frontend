import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllUsers } from '../../redux/doctors/users';

describe('test for users Reducer', () => {
  /* getAllUsers */
  test('should return at least one user', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const action = getAllUsers(); // create the action
    const result = await store.dispatch(action); // dispatch the action

    expect(result.payload.length).toBeGreaterThan(0); // test the result
  });

  test('should dispatch the correct action type', async () => {
    const actionType = 'doctors/GET_ALL_USERS/fulfilled'; // correct action type

    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const action = getAllUsers(); // create the action
    const result = await store.dispatch(action); // dispatch the action

    expect(result.type).toEqual(actionType); // test the result
  });
});
