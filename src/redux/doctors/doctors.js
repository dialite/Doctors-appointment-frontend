// movies.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_DOCTOR = 'doctors/GET_DOCTOR';
const GET_ALL_DOCTORS = 'doctors/GET_ALL_DOCTORS';
const DELETE_DOCTOR = 'doctors/DELETE_DOCTOR';
const UPDATE_MOVIE = 'doctors/UPDATE_MOVIE';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET doctor from the API
    case `${GET_DOCTOR}/fulfilled`:
      return action.payload;
    // GET all doctors from the API
    case `${GET_ALL_DOCTORS}/fulfilled`:
      return action.payload;
    // DELETE doctor from the API
    case `${DELETE_DOCTOR}/fulfilled`:
      // get the doctor id from the action metadata
      return state.filter((doctor) => doctor.id !== action.meta.arg);
      // filter out the deleted doctor and return the new state array

    // UPDATE movies from the API
    case UPDATE_MOVIE:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getDoctor = createAsyncThunk(GET_DOCTOR, async (id) => {
  const getDoctorUrl = `https://json-api-ten.vercel.app/doctors/${id}`;
  const response = await fetch(getDoctorUrl,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
}); /* getDoctor - createAsyncThunk - API */

export const getAllDoctors = createAsyncThunk(GET_ALL_DOCTORS, async () => {
  const getAllDoctorsUrl = 'https://json-api-ten.vercel.app/doctors';
  const response = await fetch(getAllDoctorsUrl,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
}); /* getAllDoctors - createAsyncThunk - API */

export const deleteDoctor = createAsyncThunk(DELETE_DOCTOR, async (id) => {
  const deleteDoctorUrl = `https://json-api-ten.vercel.app/doctors/${id}`;
  const response = await fetch(deleteDoctorUrl,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
}); /* getDoctor - createAsyncThunk - API */

export function updateMovie(obj) {
  return { type: UPDATE_MOVIE, payload: obj };
} /* updateMovie - searchBar component */
