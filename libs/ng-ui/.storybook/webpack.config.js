const path = require('path');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });
  config.resolve.alias = {
    '@gdk/ng-ui': path.resolve(__dirname, '../src'),
    '@gdk/st-ui': path.resolve(__dirname, '../../../dist/libs/st-ui')
  }
  config.resolve.extensions.push('.ts');
  return config;
};
