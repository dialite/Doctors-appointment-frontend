import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctors';
import addsReducer from './doctors/adds';
import usersReducer from './doctors/users';
import reservationsReducer from './doctors/reservations';

const store = configureStore({
  reducer: {
    doctor: doctorsReducer,
    add: addsReducer,
    user: usersReducer,
    reservation: reservationsReducer,
  },
});

export default store;
