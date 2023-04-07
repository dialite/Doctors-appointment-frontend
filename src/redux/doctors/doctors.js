// movies.js
import axios from 'axios';

// Actions... types
const GET_DOCTORS = 'DOCTOR_RESERVATION/GET_DOCTORS';
const CREATE_DOCTORS = 'DOCTOR_RESERVATION/CREATE_DOCTORS';
const DELETE_DOCTOR = 'DOCTOR_RESERVATION/DELETE_DOCTOR';
const UPDATE_DOCTOR = 'DOCTOR_RESERVATION/UPDATE_DOCTOR';

const initialState = [];

const getDoctors = (payload) => ({
  type: GET_DOCTORS,
  payload,
});

const createAllDoctors = (payload) => ({
  type: CREATE_DOCTORS,
  payload,
});

const deleteDoctor = (payload) => ({
  type: DELETE_DOCTOR,
  payload,
});

const updateDoctor = (payload) => ({
  type: UPDATE_DOCTOR,
  payload,
});

// Actions

export const getDoctorsAction = () => async (dispatch) => {
  const response = await axios.get('https://json-api-nro9.onrender.com/doctors');
  dispatch(getDoctors(response.data));
};

export const createAllDoctorsAction = (doctor, userId) => async (dispatch) => {
  const response = await axios.post('https://json-api-nro9.onrender.com/doctors', {
    doctor,
    userId,
  });
  dispatch(createAllDoctors(response.data));
};

export const deleteDoctorAction = (id) => async (dispatch) => {
  const response = await axios.delete(`https://json-api-nro9.onrender.com/doctors/${id}`);
  dispatch(deleteDoctor(response.data));
};

export const updateDoctorAction = (id, doctor) => async (dispatch) => {
  const response = await axios.put(`https://json-api-nro9.onrender.com/doctors/${id}`, {
    doctor,
  });
  dispatch(updateDoctor(response.data));
};

// doctorReducer
const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    case CREATE_DOCTORS:
      return [...state, action.payload];
    case DELETE_DOCTOR:
      return state.filter((doctor) => doctor.id !== action.payload);
    case UPDATE_DOCTOR:
      return state.map((doctor) => {
        if (doctor.id === action.payload.id) {
          return action.payload;
        }
        return doctor;
      });
    default:
      return state;
  }
};

export default doctorReducer;
