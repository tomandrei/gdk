import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
import { getAttributeKnobs } from '../../../../docs/attribute-knobs';
import { getStyleKnobs } from '../../../../docs/style-knobs';

/* tslint:disable */
import { MyComponent } from '@gdk/ra-ui';


storiesOf('Elements|MyComponent', module)
  .add('Dynamic', () => {
    const attr: any = getAttributeKnobs('my-component');
    attr.styles = getStyleKnobs('my-component');

    return <MyComponent {...attr}></MyComponent>
  });