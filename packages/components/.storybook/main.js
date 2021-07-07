const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-formik/register',
  ],

  webpackFinal: (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}))
    config.resolve.alias = {
      ...config.resolve.alias,
      // WTF TsconfigPathsPlutin should take care of this but does not >:(
      '@acter/schema/types': path.resolve(
        process.cwd(),
        '../../@acter/schema/types'
      ),
    }
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^type-graphql$/,
        (resource) => {
          resource.request = resource.request.replace(
            /type-graphql/,
            'type-graphql/dist/browser-shim.js'
          )
        }
      )
    )
    return config
  },
}
