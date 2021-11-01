import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Text from '.';

test('Text component is when changes value, it should be calls onChange', () => {
  const onChange = jest.fn();

  render(<Text onChange={onChange} />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'some value' } });

  expect(onChange).toBeCalled();
});
