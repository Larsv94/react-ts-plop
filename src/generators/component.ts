import { NodePlopAPI } from 'plop';
import { Config } from '../types/config';

const componentGenerator = (plop: NodePlopAPI, config: Config): void => {
  plop.setGenerator('component', {
    description: 'this is a test generator',
    prompts: [], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        templateFile: 'src/templates/test.hbs',
        path: './test.txt',
        force: config.force,
        abortOnFail: true,
        data: {}
      }
    ]
  });
};

export default componentGenerator;
