import { storiesOf } from '@storybook/angular';
import { getAttributeKnobs } from '../../../../docs/attribute-knobs';
import { getStyleKnobs } from '../../../../docs/style-knobs';

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