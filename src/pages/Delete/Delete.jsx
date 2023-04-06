import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors, deleteDoctor } from '../../redux/doctors/doctors';

import './Delete.css';

export default function Delete() {
  /* Load Redux State */
  const doctors = useSelector((state) => state.doctor);
  // *********************************

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  const handleButton = (id) => {
    const confirmed = window.confirm('Are you sure you want to do this?');
    if (confirmed) {
      console.log(`delete: ${id}`);
      dispatch(deleteDoctor(id));
    }
  };

  /* Clean - Redux movies store */
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  console.log(doctors);

  return (
    <div>
      <h2>Delete</h2>

      {
        doctors && (
          <div className="delDiv">
            <table id="customers">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Speciality</th>
                  <th className="delAction">Action</th>
                </tr>

                {
            (doctors.length > 0) && doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="delName">
                  Dr.
                  {' '}
                  {doctor.name}
                  {' '}
                  {doctor.lastname}
                </td>
                <td>{doctor.speciality}</td>
                <td><button type="button" className="delButton" onClick={() => handleButton(doctor.id)}>Delete</button></td>
              </tr>
            ))
          }
              </tbody>
            </table>
          </div>
        )
      }

    </div>
  );
}
