import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctors';
import addsReducer from './doctors/adds';

const store = configureStore({
  reducer: {
    doctor: doctorsReducer,
    add: addsReducer,
  },
});

export default store;
