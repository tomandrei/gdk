import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
import { getAttributeKnobs } from '../../../utils/attribute-knobs';
import { getStyleKnobs } from '../../../utils/style-knobs';

/* tslint:disable */
import { GdkComponent } from '@gdk/ra-ui';


storiesOf('Elements|GdkComponent', module)
  .add('Dynamic', () => {
    const attr: any = getAttributeKnobs('gdk-component');
    attr.styles = getStyleKnobs('gdk-component');

    return <GdkComponent {...attr}></GdkComponent>
  });