import { storiesOf } from '@storybook/angular';
import { getAttributeKnobs } from '../../../../docs/attribute-knobs';
import { getStyleKnobs } from '../../../../docs/style-knobs';

/* tslint:disable */
import { MyComponent } from '@gdk/ng-ui';


storiesOf('Elements|MyComponent', module)
  .add('Dynamic', () => {
    const attr: any = getAttributeKnobs('my-component');
    attr.styles = getStyleKnobs('my-component');

    return {
      component: MyComponent,
      props: attr
    }
  });