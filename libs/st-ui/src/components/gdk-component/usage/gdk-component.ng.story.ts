import { storiesOf } from '@storybook/angular';
import { getAttributeKnobs } from '../../../utils/attribute-knobs';
import { getStyleKnobs } from '../../../utils/style-knobs';

/* tslint:disable */
import { GdkComponent } from '@gdk/ng-ui';


storiesOf('Elements|GdkComponent', module)
  .add('Dynamic', () => {
    const attr: any = getAttributeKnobs('gdk-component');
    attr.styles = getStyleKnobs('gdk-component');

    return {
      component: GdkComponent,
      props: attr
    }
  });