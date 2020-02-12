import * as changeCase from 'change-case';

export const cwd = (): string => process.cwd();

export const pathHelper = (prefix: Array<string>) => (folder: string, file: string): string => {
  const segments = folder.split('/').map(s => changeCase.paramCase(s));
  const lastSegment = segments[segments.length - 1];
  const path = [...prefix, segments.join('/'), typeof file === 'string' ? file : lastSegment];

  return path.join('/');
};

export const componentCase = (name: string): string =>
  changeCase.pascalCase(name.split('/').slice(-1)[0]);

export const fileCase = (name: string): string =>
  changeCase.paramCase(name.split('/').slice(-1)[0]);

const BaseHelpers = {
  cwd,
  cwdPath: pathHelper([cwd()]),
  path: pathHelper([]),
  componentCase,
  fileCase
};

export default BaseHelpers;
