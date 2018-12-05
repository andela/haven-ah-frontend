import React from 'react';
import { Redirect } from 'react-router-dom';

export default (component) => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Redirect to="/" />;
  }
  return component;
};
