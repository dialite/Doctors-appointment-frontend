/* eslint-disable arrow-body-style */
import React from 'react';

const ReservationForm = () => {
  return (
    <section className="reservation">
      <div className="reservation-container">
        <h2 className="reservation-title">Make your reservations</h2>
        <form action="submit" className="reservation-form">
          <input
            type="text"
            className="reservation-form__input"
            id="city"
            name="city"
            placeholder="Enter City"
            required
          />
          <input
            className="form-control"
            id="datetime"
            type="datetime-local"
            name="appointmenTime"
            min="2023-04-10T00:00"
            max="2030-04-17T00:00"
            required
          />
          <select name="doctor" id="doctor">
            <option value="">Select your doctor</option>
          </select>
          <input type="submit" value="Reserver Doctor" className="button1" />
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
