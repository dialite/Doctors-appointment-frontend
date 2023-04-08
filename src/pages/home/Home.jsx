/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleDoctor from '../../components/doctors/SingleDoctor';
import { getDoctorsAction } from '../../redux/doctors/doctors';
import './Home.css';

const Home = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  return (
    <div className="home-page">
      <>
        <div className="home-page__hero">
          <h1>DOCTORS ONLINE</h1>
          <p>Find the best doctors in your area</p>
        </div>
        {
          doctors && (
            <div className="home-page__doctors">
                {doctors.map((doctor) => (
                  <Link to={`/detailspage/${doctor.id}`}>
                    <SingleDoctor
                      name={doctor.name}
                      lastname={doctor.lastname}
                      image={doctor.image}
                      speciality={doctor.speciality}
                      experience={doctor.experience}
                    />
                  </Link>
                ))}
            </div>
          )
        }
      </>
    </div>
  );
};

export default Home;
