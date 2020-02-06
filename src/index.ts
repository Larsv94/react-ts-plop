import { NodePlopAPI, PlopCfg } from 'plop';
import componentGenerator from './generators/component';
import BaseHelpers from './utils/helpers';

module.exports = function pack(plop: NodePlopAPI, config: PlopCfg): void {
  // register all shared helpers
  Object.entries(BaseHelpers).forEach(([key, value]) => plop.addHelper(key, value));
  componentGenerator(plop, config);
};
