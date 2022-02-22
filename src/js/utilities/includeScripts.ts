export interface ScriptDefinition {
  src: string;
  type?: 'module' | 'nomodule';
  asyncDefer?: 'async' | 'defer';
}

export const attribute = (type?: 'module' | 'nomodule' | 'async' | 'defer'): string => {
  let result = '';

  switch (type) {
    case 'module':
      result = ' type="module"';
      break;
    case 'nomodule':
      result = ' nomodule';
      break;
    case 'async':
      result = ' async';
      break;
    case 'defer':
      result = ' defer';
      break;
    default:
  }

  return result;
};

const includeScripts = (scripts: Array<ScriptDefinition>): string => (
  scripts.map((script: ScriptDefinition): string => (
    `<script src="${script.src}"${attribute(script.type)}${attribute(script.asyncDefer)}></script>`
  )).join('')
);

export default includeScripts;
