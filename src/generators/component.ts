import { NodePlopAPI } from 'plop';
import styledComponentTemplate from '../templates/functionComponent/component.styled.tsx.hbs';
import functionComponentTemplate from '../templates/functionComponent/component.tsx.hbs';
import indexTemplate from '../templates/functionComponent/index.ts.hbs';
import { Config } from '../types/config';
import GetActions from '../utils/actions';

const componentGenerator = (plop: NodePlopAPI, config: Config): void => {
  const { Add } = GetActions(config.ComponentPath || '', config);
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
      Add(functionComponentTemplate, '{{path name}}.tsx', {
        data: { fullComponent: true, styled: true }
      }),
      Add(styledComponentTemplate, '{{path name}}.styled.tsx', {
        data: { fullComponent: true, styled: true }
      }),
      Add(indexTemplate, '{{path name "index"}}.ts', {
        data: { fullComponent: true, styled: true }
      })
    ]
  });
};

export default componentGenerator;
