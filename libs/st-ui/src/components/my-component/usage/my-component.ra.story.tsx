import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
import { getPropKnobs } from '../../../../docs/prop-knobs';
/* tslint:disable */
import { MyComponent } from '@gdk/ra-ui';


storiesOf('Elements|MyComponent', module)
  .add('Dynamic', () => {
    const attr: any = getPropKnobs('my-component');

    return <MyComponent {...attr}></MyComponent>
  });