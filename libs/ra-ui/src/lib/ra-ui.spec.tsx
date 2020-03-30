import React from 'react';
import { render } from '@testing-library/react';

import { GdkComponent } from './ra-ui';

describe(' ra-ui ', () => {
  it('should render GdkComponent successfully', () => {
    const { baseElement } = render(<GdkComponent />);
    expect(baseElement).toBeTruthy();
  });
});
