import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
import { getAttributeKnobs } from '../../../../docs/attribute-knobs';
import { getStyleKnobs } from '../../../../docs/style-knobs';

/* tslint:disable */
import { GdkComponent } from '@gdk/ra-ui';


storiesOf('Elements|GdkComponent', module)
  .add('Dynamic', () => {
    const attr: any = getAttributeKnobs('gdk-component');
    attr.styles = getStyleKnobs('gdk-component');

    return <GdkComponent {...attr}></GdkComponent>
  });