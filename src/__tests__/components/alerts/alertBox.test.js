import React from 'react';
import { render } from 'react-testing-library';
import AlertBox from '../../../components/containers/alerts/AlertBox';


describe('Alert Box component', () => {
  test('should', () => {
    const props = {
      theme: 'danger',
      message: 'Login successful'
    };

    const { getByText } = render(<AlertBox {...props} />);

    const alertMessage = getByText(props.message);

    expect(alertMessage).toBeDefined();
    expect(alertMessage.parentElement.className).toBe('alert alert-danger');
  });
});
