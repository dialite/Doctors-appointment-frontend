import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('DetailsPage', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the doctor details', () => {
    const mockDoctor = {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      speciality: 'Cardiology',
      experience: '10 years',
      consultation: '$100',
      image: 'https://example.com/doctor.jpg',
    };

    useParams.mockReturnValue({ id: '1' });
    useSelector.mockReturnValue([mockDoctor]);

    render(<DetailsPage />);

    expect(screen.getByTestId('doctorDetail')).toBeInTheDocument();
    expect(screen.getByTestId('detailsTitle')).toHaveTextContent('DetailsPage');
    expect(screen.getByTestId('detailsName')).toHaveTextContent(`Dr. ${mockDoctor.name.toUpperCase()} ${mockDoctor.lastname.toUpperCase()}`);
    expect(screen.getByTestId('detailsParagraph')).toHaveTextContent('Passion for Health');
    expect(screen.getByText('Speciality:')).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.speciality)).toBeInTheDocument();
    expect(screen.getByText('Experience:')).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.experience)).toBeInTheDocument();
    expect(screen.getByText('Consultation fee:')).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.consultation)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
    /* screen.debug(); */
  });

  it('redirects to the reserve page when the Reserve button is clicked', () => {
    const mockDoctor = {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      speciality: 'Cardiology',
      experience: '10 years',
      consultation: '$100',
      image: 'https://example.com/doctor.jpg',
    };

    useParams.mockReturnValue({ id: '1' });
    useSelector.mockReturnValue([mockDoctor]);

    render(<DetailsPage />);

    fireEvent.click(screen.getByRole('button', { name: 'Reserve' }));

    expect(mockNavigate).toHaveBeenCalledWith(`/reserve/${mockDoctor.id}`);
  });
});
