import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctors } from '../../redux/doctors/doctors';

export default function DetailsPage() {
  /* Load Redux State */
  const allDoctors = useSelector((state) => state.doctor);

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  // *********************************

  const { id } = useParams();

  const doctors = allDoctors.filter((doctor) => doctor.id === parseInt(id, 10));

  /* Clean - Redux movies store */
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  return (
    <div className="detailsContainer">
      <h2>DetailsPage</h2>
      {
        doctors.map((doctor) => (
          <div key={doctor.id} className="detailsDiv1">
            <img src={doctor.image} alt="doc" className="detailsImage" />
            <div className="detailsDiv2">
              <h3 className="detailsName">
                Dr.
                {' '}
                {doctor.name.toUpperCase()}
                {' '}
                {doctor.lastname.toUpperCase()}
              </h3>
              <h4 className="detailsSubName">Passion for Health</h4>
              <div className="detailsDiv3">
                <p>Speciality:</p>
                <p>{doctor.speciality}</p>
              </div>

              <div className="detailsDiv3">
                <p>Experience:</p>
                <p>{doctor.experience}</p>
              </div>

              <div className="detailsDiv3">
                <p>Consultation fee:</p>
                <p>{doctor.consultation}</p>
              </div>

              <div className="detailsDivButton">
                <button type="button" className="detailsButton">
                  <BsFillCalendar2WeekFill />
                  &nbsp;Reserve
                </button>
              </div>

            </div>
          </div>
        ))
      }

    </div>
  );
}
