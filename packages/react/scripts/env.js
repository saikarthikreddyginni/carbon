'use strict';

const BABEL_ENV = process.env.BABEL_ENV;

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: BABEL_ENV === 'es' ? false : 'commonjs',
        targets: {
          browsers: ['extends browserslist-config-carbon'],
        },
      },
    ],
  ],
});
