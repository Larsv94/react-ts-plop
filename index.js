require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    target: 'es6',
    noImplicitAny: true,
    moduleResolution: 'node',
    sourceMap: true,
    outDir: 'dist',
    lib: ['es2019']
  },
  include: ['./src/**/*', './index.js']
});

module.exports = require('./src/index');
