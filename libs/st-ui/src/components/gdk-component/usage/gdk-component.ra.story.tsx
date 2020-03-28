import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
import { getAttributeKnobs, AttributeKnobs } from '../../../utils/attribute-knobs';
import { getStyleKnobs } from '../../../utils/style-knobs';

// tslint:disable-next-line nx-enforce-module-boundaries
import { GdkComponent } from '@gdk/ra-ui'; // eslint-disable-line @nrwl/nx/enforce-module-boundaries

storiesOf('Elements|GdkComponent', module)
  .add('Dynamic', () => {
    const attr: AttributeKnobs = getAttributeKnobs('gdk-component');
    attr.styles = getStyleKnobs('gdk-component');

    return <GdkComponent {...attr}></GdkComponent>
  });