import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { MyComponent } from '@gdk/ra-ui';
import readme from '../readme.md';

storiesOf('Elements|MyComponent', module)
    .add('Dynamic', () => {
        return (
            <MyComponent first="Storybook" last="React"></MyComponent>
        )
    },{
        notes: { markdown: readme }
    })