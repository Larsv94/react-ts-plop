import { NodePlopAPI } from 'plop';
import { Config } from '../types/config';
import GetActions from '../utils/actions';

const singleFileGenerator = (plop: NodePlopAPI, config: Config): void => {
  const { Add } = GetActions(config.ComponentPath, config);
  plop.setGenerator('single-file', {
    description: 'this is a test generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      },
      {
        type: 'input',
        name: 'folder',
        message: `Component location (${config.ComponentPath}...) `
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
      Add('src/templates/functionComponent/component.tsx.hbs', '{{path folder name}}.tsx', {
        data: { fullComponent: false }
      })
      // Add('src/templates/functionComponent/component.styled.tsx.hbs', '{{path name}}.styled.tsx', {
      //   data: { fullComponent: false }
      // }),
      // Add('src/templates/functionComponent/index.ts.hbs', '{{path name "index"}}.ts', {
      //   data: { fullComponent: false }
      // })
    ]
  });
};

export default singleFileGenerator;
