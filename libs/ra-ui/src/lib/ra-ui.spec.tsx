import React from 'react';
import { render } from '@testing-library/react';

import RaUi from './ra-ui';

describe(' RaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RaUi />);
    expect(baseElement).toBeTruthy();
  });
});
