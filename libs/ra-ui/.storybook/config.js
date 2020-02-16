import { configure, addDecorator, storyOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// Load stories
require.context('../../st-ui/src/', true, /\.ra.story\.tsx$/);
const loaderFn = () => {
    // Load storybook structure
    require('./structure/index');

    const req = require.context('../../st-ui/src/', true, /\.ra.story\.tsx$/);
    req.keys().forEach(fname => req(fname));
}

configure(loaderFn, module);