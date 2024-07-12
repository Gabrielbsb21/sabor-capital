import { render, screen } from '@testing-library/react';
import Header from '.';
import React from 'react';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);
  });
});
