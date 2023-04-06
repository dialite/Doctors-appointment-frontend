/* eslint-disable no-alert */
import React, { useState } from 'react';
import './Add.css';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const initialState = {
    id: null,
    name: '',
    lastname: '',
    speciality: '',
    experience: '',
    consultation: '',
    image: '',
  };

  //* ******************* */
  const history = useNavigate();

  const [init, setInit] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInit({ ...init, [name]: value });
  };

  const handleNext = () => {
    if (init.name && init.lastname && init.speciality && init.experience && init.consultation) {
      alert('Next Step');
      history('/add2');
    } else {
      alert('Fill out all fields');
    }
  };

  return (
    <div>
      <form className="addForm">
        <h2>Add Doctor - Step 1/3</h2>

        <label htmlFor="name">
          <b>First Name</b>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            autoComplete="off"
            value={init.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="lastname">
          <b>Last Name</b>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your last name.."
            autoComplete="off"
            value={init.lastname}
            onChange={handleInputChange}
            required
          />
        </label>

        <label htmlFor="speciality">
          <b>Speciality</b>
          <select
            id="speciality"
            name="speciality"
            value={init.speciality}
            onChange={handleInputChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Urology">Urology</option>
          </select>
        </label>

        <label htmlFor="experience">
          <b>Experience</b>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Your experience in years"
            min="1"
            autoComplete="off"
            value={init.experience}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="consultation">
          <b>Consultation Fee</b>
          <input
            type="number"
            id="consultation"
            name="consultation"
            placeholder="Your consultation fee in dollars"
            min="1"
            autoComplete="off"
            value={init.consultation}
            onChange={handleInputChange}
          />
        </label>

        <button type="button" className="addButton" onClick={handleNext}>Next</button>
      </form>

    </div>
  );
}
