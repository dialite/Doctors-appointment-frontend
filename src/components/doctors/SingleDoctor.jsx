import React from 'react';
import PropTypes from 'prop-types';
import {
  FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedin,
} from 'react-icons/fa';
import { getDoctorsAction } from '../../redux/doctors/doctors';
import baseUrl from '../helpers/data';

const socialIcons = [
  { icon: FaFacebookF },
  { icon: FaTwitter },
  { icon: FaInstagramSquare },
  { icon: FaLinkedin },
];

const SingleDoctor = ({
  name, lastname, image, speciality, experience,
}) => (
  <div className="doctor1">
    <div className="doctor1__img">
      <img src={`${baseUrl}${image}`} alt="doctor" />
    </div>
    <div className="doctor1__info">
      <h3 className="doctor1__name">
        {name}
        {' '}
        {lastname}
      </h3>
      <p>................................</p>
      <p>{speciality}</p>
      <p>
        {experience}
        years of experience
      </p>
    </div>
    <div className="doctor1__social">
      {socialIcons.map((social) => (
        <social.icon key={social.icon} />
      ))}
    </div>
  </div>
);

SingleDoctor.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
};

export default SingleDoctor;
