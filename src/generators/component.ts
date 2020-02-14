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
      },
      {
        type: 'confirm',
        name: 'h',
        message: 'Include hooks?'
      },
      {
        type: 'checkbox',
        name: 'hook',
        message: 'hooks to include:',
        when: (answers): boolean => answers.h,
        choices: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer',
          'useCallback',
          'useMemo',
          'useRef',
          'useLayoutEffect'
        ]
      }
    ], // array of inquirer prompts
    actions: [
      Add('src/templates/functionComponent/component.tsx.hbs', '{{path name}}.tsx', {
        data: { fullComponent: true }
      }),
      Add('src/templates/functionComponent/component.styled.tsx.hbs', '{{path name}}.styled.tsx', {
        data: { fullComponent: true }
      }),
      Add('src/templates/functionComponent/index.ts.hbs', '{{path name "index"}}.ts', {
        data: { fullComponent: true }
      })
    ]
  });
};

export default componentGenerator;
