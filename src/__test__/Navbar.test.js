import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('Navbar component', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    // Check that the hamburger menu icon is present
    const hamburgerIcon = screen.getByTestId('GiHamburgerMenu');
    expect(hamburgerIcon).toBeInTheDocument();

    // Check that the view container is hidden by default
    const viewContainer = screen.getByTestId('viewContainer');
    expect(viewContainer).toHaveClass('view');

    // Check that the welcome message includes the stored user's username
    const welcomeMessage = screen.getByText('Welcome');
    expect(welcomeMessage).toBeInTheDocument();

    // Check that the Home link is present and has the correct class when selected
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(homeLink).not.toHaveClass('select');
    act(() => {
      homeLink.click();
    });
    expect(window.location.pathname).toBe('/home');

    // Check that the My reservation link is present and has the correct class when selected
    const reservationsLink = screen.getByRole('link', { name: 'My reservation' });
    expect(reservationsLink).toHaveAttribute('href', '/myreservations');
    expect(reservationsLink).not.toHaveClass('select');
    act(() => {
      reservationsLink.click();
    });
    expect(window.location.pathname).toBe('/myreservations');

    // Check that the Add doctor link is present and has the correct class when selected
    const addDoctorLink = screen.getByRole('link', { name: 'Add doctor' });
    expect(addDoctorLink).toHaveAttribute('href', '/add');
    expect(addDoctorLink).not.toHaveClass('select');
    act(() => {
      addDoctorLink.click();
    });
    expect(window.location.pathname).toBe('/add');

    // Check that the Delete doctor link is present and has the correct class when selected
    const deleteDoctorLink = screen.getByRole('link', { name: 'Delete doctor' });
    expect(deleteDoctorLink).toHaveAttribute('href', '/delete');
    expect(deleteDoctorLink).not.toHaveClass('select');
    act(() => {
      deleteDoctorLink.click();
    });

    // Check that the Log out link is present and has the correct href attribute
    const logoutLink = screen.getByRole('link', { name: 'Log out' });
    expect(logoutLink).toHaveAttribute('href', '/');
  });
});
