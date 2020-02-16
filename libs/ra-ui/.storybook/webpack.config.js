const path = require('path');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });
  config.resolve.alias = {
    '@gdk/ra-ui': path.resolve(__dirname, '../src'),
    '@gdk/st-ui': path.resolve(__dirname, '../../../dist/libs/st-ui')
  }
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    }
  });
  return config;
};
