import { PlopCfg } from 'plop';

type Stylings = 'css' | 'js';

export interface ReactPlopConfig {
  Style: Stylings;
}

export type Config = Partial<ReactPlopConfig & PlopCfg>;
