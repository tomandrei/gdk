import { configure, addDecorator, addParameters } from '@storybook/react';
import theme from '../../../.storybook/theme';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

addParameters({
    options: {
        theme: theme
    }
})

// Load stories
require.context('../../st-ui/src/', true, /\.ra.story\.tsx$/);
const loaderFn = () => {
    // Load storybook structure
    require('./structure/index');

    const req = require.context('../../st-ui/src/', true, /\.ra.story\.tsx$/);
    req.keys().forEach(fname => req(fname));
}

configure(loaderFn, module);