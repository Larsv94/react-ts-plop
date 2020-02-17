import { PlopCfg } from 'plop';

type Stylings = 'css' | 'js';

export interface ReactPlopConfig {
  Style: Stylings;
  ComponentPath: string;
  ContainerPath: string;
}



export type Config = ReactPlopConfig & PlopCfg;
