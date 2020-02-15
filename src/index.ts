import * as fs from 'fs';
import * as path from 'path';
import { NodePlopAPI, PlopCfg } from 'plop';
import defaultConfig from './configuration';
import componentGenerator from './generators/component';
import singleFileGenerator from './generators/single-file';
import { Config } from './types/config';
import BaseHelpers from './utils/helpers';

module.exports = function pack(plop: NodePlopAPI, config: PlopCfg): void {
  const PlopReactConfig: Config = { ...defaultConfig, ...config };
  // register all shared helpers
  Object.entries(BaseHelpers).forEach(([key, value]) => plop.addHelper(key, value));
  const hooksPartial: string = fs.readFileSync(
    path.join(plop.getPlopfilePath(), '/src/templates/partials/hooks.hbs'),
    {
      encoding: 'utf-8'
    }
  );
  plop.addPartial('hooks', hooksPartial);
  componentGenerator(plop, PlopReactConfig);
  singleFileGenerator(plop, PlopReactConfig);
};
