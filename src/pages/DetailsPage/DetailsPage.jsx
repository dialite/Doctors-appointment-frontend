import React from 'react';
import './DetailsPage.css';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import doctorImage from '../../images/doctor1-500.jpg';

export default function DetailsPage() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      speciality: 'Cardiologist',
      experience: '10 years',
      consultation: '30$',
      image: '../../images/doctor1-500.jpg',
    },
  ];

  return (
    <div className="detailsContainer">
      <h2>DetailsPage</h2>
      {
        doctors.map((doctor) => (
          <div key={doctor.id} className="detailsDiv1">
            <img src={doctorImage} alt="doc" className="detailsImage" />
            <div className="detailsDiv2">
              <h3 className="detailsName">{doctor.name}</h3>
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
