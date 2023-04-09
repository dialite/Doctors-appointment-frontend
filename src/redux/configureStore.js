import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctors';
import addsReducer from './doctors/adds';
import usersReducer from './doctors/users';

const store = configureStore({
  reducer: {
    doctor: doctorsReducer,
    add: addsReducer,
    user: usersReducer,
  },
});

export default store;
