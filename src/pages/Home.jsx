/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import SingleDoctor from '../components/doctors/SingleDoctor';
import 'react-multi-carousel/lib/styles.css';
import { getDoctorsAction } from '../redux/doctors/doctors';

const Home = () => {
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
              <Carousel
                responsive={responsive}
                className="doctor-carousel"
              >
                {doctors.map((doctor) => (
                  <Link to={`/doctors_details/${doctor.id}`}>
                    <SingleDoctor
                      name={doctor.name}
                      lastname={doctor.lastname}
                      image={doctor.image}
                      speciality={doctor.speciality}
                      experience={doctor.experience}
                    />
                  </Link>
                ))}
              </Carousel>
            </div>
          )
        }
      </>
    </div>
  );
};

export default Home;
