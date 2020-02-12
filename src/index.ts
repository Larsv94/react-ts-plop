import { NodePlopAPI, PlopCfg } from 'plop';
import defaultConfig from './configuration';
import componentGenerator from './generators/component';
import { Config } from './types/config';
import BaseHelpers from './utils/helpers';

module.exports = function pack(plop: NodePlopAPI, config: PlopCfg): void {
  const PlopReactConfig: Config = { ...defaultConfig, ...config };
  // register all shared helpers
  Object.entries(BaseHelpers).forEach(([key, value]) => plop.addHelper(key, value));
  componentGenerator(plop, PlopReactConfig);
};
