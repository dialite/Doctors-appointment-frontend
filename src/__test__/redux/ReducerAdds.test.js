import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { finishDoctor, addDoctor } from '../../redux/doctors/adds';
import { deleteDoctor } from '../../redux/doctors/doctors';

describe('test for finishDoctor reducer', () => {
  test('should dispatch finishDoctor and update state', async () => {
    const mockDoctor = {
      name: 'Rick', lastname: 'Sanchez', speciality: 'Travel Time', experience: 50, consultation: '100.0',
    };
    /* const expectedState = mockDoctor; */

    const store = configureStore({ reducer });

    const result = await store.dispatch(finishDoctor(mockDoctor));

    /* expect(store.getState()).toEqual(expectedState); */
    /* expect(result.payload).toHaveLength(1); */
    expect(result.payload).toEqual(expect.objectContaining({ name: 'Rick' }));

    const store2 = configureStore({ reducer });
    await store2.dispatch(deleteDoctor(result.payload.id));
  });

  test('should dispatch addDoctor and update state', () => {
    const mockDoctor = { name: 'Dr. Jane Smith', specialty: 'Pediatrics' };
    const expectedState = mockDoctor;

    const store = configureStore({ reducer });

    store.dispatch(addDoctor(mockDoctor));

    expect(store.getState()).toEqual(expectedState);
  });
});
