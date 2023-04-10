/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors } from '../../redux/doctors/doctors';
import { getAllReservations } from '../../redux/doctors/reservations';

import './MyReservations.css';

export default function MyReservations() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Clean - Redux movies store */
  useEffect(() => {
    dispatch(getAllReservations());
    dispatch(getAllDoctors());
  }, [dispatch]);

  /* Load Redux State */
  const allReservations = useSelector((state) => state.reservation);
  const doctors = useSelector((state) => state.doctor);
  // *********************************

  /* Get user_id */
  const storedUser = JSON.parse(localStorage.getItem('user')) || ''; /* Get User */

  /* Reservations filtered by user_id */
  const reservations = allReservations.filter((reserve) => reserve.user_id === storedUser.id);

  // *********************************

  return (
    <div>
      <h2>My Reservation</h2>

      {reservations.length > 0 ? (
        <div className="myReserDiv">
          <table id="customers">
            <tbody>
              <tr>
                <th>Doctor id</th>
                <th>City</th>
                <th>Datetime</th>
              </tr>

              {reservations.map((reserve) => {
                /* Doctor's name by ID */
                const doctor = doctors.find((doc) => doc.id.toString() === reserve.doctor_id.toString());
                const doctorName = doctor ? `${doctor.name} ${doctor.lastname}` : '';

                /* Datetime into dd/mm/yyyy hh:mm */
                const date = new Date(reserve.datetime);
                const formattedDate = date.toLocaleString('en-GB', {
                  day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric',
                });

                return (
                  <tr key={reserve.id}>
                    <td>
                      Dr.
                      {' '}
                      {doctorName}
                    </td>
                    <td>{reserve.city}</td>
                    <td>{formattedDate}</td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      ) : (
        <div>No reservations found</div>
      )}
    </div>
  );
}