import * as React from 'react';
import { h } from '@stencil/core';
import { storiesOf } from '@storybook/react';
/* eslint-disable */
/* tslint:disable */
import { MyComponent } from '@gdk/ra-ui';

storiesOf('Elements|MyComponent', module)
    .add('Dynamic', () => {
        return (
            <MyComponent first="Storybook" last="React"></MyComponent>
        )
    })