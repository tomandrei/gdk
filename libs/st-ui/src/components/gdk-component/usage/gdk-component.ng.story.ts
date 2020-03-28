import { storiesOf } from '@storybook/angular';
import { getAttributeKnobs, AttributeKnobs } from '../../../utils/attribute-knobs';
import { getStyleKnobs } from '../../../utils/style-knobs';

// tslint:disable-next-line nx-enforce-module-boundaries
import { GdkComponent } from '@gdk/ng-ui'; // eslint-disable-line @nrwl/nx/enforce-module-boundaries

storiesOf('Elements|GdkComponent', module)
  .add('Dynamic', () => {
    const attr: AttributeKnobs = getAttributeKnobs('gdk-component');
    attr.styles = getStyleKnobs('gdk-component');

    return {
      component: GdkComponent,
      props: attr
    }
  });