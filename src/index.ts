import { NodePlopAPI, PlopCfg } from 'plop';
import componentGenerator from './generators/component';

module.exports = function pack(plop: NodePlopAPI, config: PlopCfg): void {
  componentGenerator(plop, config);
};
