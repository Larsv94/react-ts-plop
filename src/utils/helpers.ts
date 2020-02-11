import * as changeCase from 'change-case';

export const cwd = (): string => process.cwd();
export const cwdPath = (folder: string, file: string): string => {
  const segments = folder.split('/').map(s => changeCase.paramCase(s));
  const lastSegment = segments[segments.length - 1];
  const path = [cwd(), segments.join('/'), typeof file === 'string' ? file : lastSegment];

  return path.join('/');
};

const BaseHelpers = {
  cwd,
  cwdPath
};

export default BaseHelpers;
