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
    baseUrl: '.',
    paths: {
      '*': ['node_modules/*', 'src/types/*']
    }
  },
  include: ['src/**/*']
});

module.exports = require('./src/index');
