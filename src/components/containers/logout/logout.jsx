import React from 'react';
import { Redirect } from 'react-router-dom';
import { clearCredentials } from '../../../utilities/auth';

/**
 * Functional component to reset localstorage
 * and redirect the user to the homepage
 * @returns {ReactObject} Redirect component
 */
export default function logout() {
  clearCredentials();
  return (
    <Redirect to="/" />
  );
}
