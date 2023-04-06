import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctors';

const store = configureStore({
  reducer: {
    doctor: doctorsReducer,
  },
});

export default store;
