import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';

export default function Add() {
  return (
    <div>
      <form className="addForm">
        <h2>Add Doctor - Step 1/3</h2>

        <label htmlFor="fname">
          <b>First Name</b>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." autoComplete="off" />
        </label>

        <label htmlFor="lname">
          <b>Last Name</b>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." autoComplete="off" />
        </label>

        <label htmlFor="country">
          <b>Speciality</b>
          <select id="country" name="country">
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Urology">Urology</option>
          </select>
        </label>

        <label htmlFor="lexperience">
          <b>Experience</b>
          <input type="number" id="lexperience" name="lexperience" placeholder="Your experience in years" min="1" autoComplete="off" />
        </label>

        <label htmlFor="lconsultation">
          <b>Consultation Fee</b>
          <input type="number" id="lconsultation" name="lconsultation" placeholder="Your consultation fee in dollars" min="1" autoComplete="off" />
        </label>

        <Link to="/add2"><button type="button" className="addButton">Next</button></Link>
      </form>

    </div>
  );
}
