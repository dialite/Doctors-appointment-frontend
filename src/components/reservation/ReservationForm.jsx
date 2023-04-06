import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReservationForm = () => {
  const [city, setCity] = useState('');
  const [appointmenTime, setAppointmentTime] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      city,
      appointmenTime,
    };
    dispatch(addReservation(reservation));
    setCity('');
    setAppointmentTime('');
  };

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
            value={city}
            placeholder="Enter City"
            onClick={handleSubmit}
            required
          />
          <input
            className="form-control"
            id="datetime"
            type="datetime-local"
            name="appointmenTime"
            value={appointmenTime}
            min="2023-04-10T00:00"
            max="2030-04-17T00:00"
            required
          />
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
