import { NodePlopAPI } from 'plop';
import { Config } from '../types/config';
import GetActions from '../utils/actions';

const componentGenerator = (plop: NodePlopAPI, config: Config): void => {
  const { Add } = GetActions(config.ComponentPath, config);
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
      Add('src/templates/functionComponent/component.tsx.hbs', '{{path name}}.tsx'),
      Add('src/templates/functionComponent/component.styled.tsx.hbs', '{{path name}}.styled.tsx'),
      Add('src/templates/functionComponent/index.ts.hbs', '{{path name "index"}}.ts')
    ]
  });
};

export default componentGenerator;
