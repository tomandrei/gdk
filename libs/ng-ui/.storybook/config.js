import { configure, addDecorator, addParameters } from '@storybook/angular';
import theme from '../../../.storybook/theme';
import { withKnobs } from '@storybook/addon-knobs';
import { applyPolyfills, defineCustomElements } from '@gdk/st-ui/loader';

addDecorator(withKnobs);

addParameters({
    options: {
        theme: theme
    }
})

// Load stories
const loaderFn = () => {
    // Load storybook structure
    require('./structure/index');

    const req = require.context('../../st-ui/src/', true, /\.ng.story\.ts$/);
    req.keys().forEach(fname => req(fname));
}
configure(loaderFn, module);

// Add stencil
applyPolyfills().then(() => {
    defineCustomElements(window)
})