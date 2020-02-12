import { AddActionConfig } from 'plop';
import { Config } from '../types/config';

const GetActions = (BasePath: string, cfg: Config) => {
  const ActionPath = [process.cwd(), BasePath].join('/');
  const Add = (
    templateFile: string,
    path: string,
    options?: Partial<AddActionConfig>
  ): AddActionConfig => {
    const defaultAction: AddActionConfig = {
      type: 'add',
      templateFile,
      path: `${ActionPath}/${path}`,
      force: cfg.force,
      abortOnFail: true,
      data: {}
    };
    return { ...defaultAction, ...options };
  };
  return {
    Add
  };
};

export default GetActions;
