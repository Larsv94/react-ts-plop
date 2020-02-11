import { NodePlopAPI } from 'plop';
import { Config } from '../types/config';

const componentGenerator = (plop: NodePlopAPI, config: Config): void => {
  plop.setGenerator('component', {
    description: 'this is a test generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        templateFile: 'src/templates/functionComponent/component.tsx.hbs',
        path: '{{cwdPath name}}.tsx',
        force: config.force,
        abortOnFail: true,
        data: {}
      },
      {
        type: 'add',
        templateFile: 'src/templates/functionComponent/component.styled.tsx.hbs',
        path: '{{cwdPath name}}.styled.tsx',
        force: config.force,
        abortOnFail: true,
        data: {}
      },
      {
        type: 'add',
        templateFile: 'src/templates/functionComponent/index.ts.hbs',
        path: '{{cwdPath name "index"}}.tsx',
        force: config.force,
        abortOnFail: true,
        data: {}
      }
    ]
  });
};

export default componentGenerator;
