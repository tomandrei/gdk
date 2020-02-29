import { storiesOf } from '@storybook/angular';
/* eslint-disable */
/* tslint:disable */
import { MyComponent } from '@gdk/ng-ui';

storiesOf('Elements|MyComponent', module)
  .add('Dynamic', () => ({
    component: MyComponent,
    props: {
        first: 'Storybook',
        last: 'Angular'
    }
  }));

