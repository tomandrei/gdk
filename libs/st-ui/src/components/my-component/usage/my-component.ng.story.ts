import { storiesOf } from '@storybook/angular';
import { getPropKnobs } from '../../../../docs/prop-knobs';
/* tslint:disable */
import { MyComponent } from '@gdk/ng-ui';


storiesOf('Elements|MyComponent', module)
  .add('Dynamic', () => {
    const attr: any = getPropKnobs('my-component');

    return {
      component: MyComponent,
      props: attr
    }
  });