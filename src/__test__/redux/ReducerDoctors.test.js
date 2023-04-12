import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, {
  deleteDoctor, getAllDoctors,
} from '../../redux/doctors/doctors';
import { finishDoctor } from '../../redux/doctors/adds';

describe('test for finishDoctor reducer', () => {
  test('should dispatch deleteDoctor', async () => {
    const mockDoctor = {
      name: 'Rick', lastname: 'Sanchez', speciality: 'Travel Time', experience: 50, consultation: '100.0',
    };
    /* const expectedState = mockDoctor; */

    const store = configureStore({ reducer });

    const result = await store.dispatch(finishDoctor(mockDoctor));

    /* expect(store.getState()).toEqual(expectedState); */
    expect(result.payload).toEqual(expect.objectContaining({ name: 'Rick' }));

    const store2 = configureStore({ reducer });
    await store2.dispatch(deleteDoctor(result.payload.id));
  });

  test('should dispatch getAllDoctors', async () => {
    const store = configureStore({ reducer });

    const result = await store.dispatch(getAllDoctors());

    expect(result.payload.length).toBeGreaterThan(0);
  });
});
