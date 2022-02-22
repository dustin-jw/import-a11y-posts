import { ParamsDictionary } from 'express-serve-static-core';

interface ParamsOutput {
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  a: number;
  b: number;
}

const formatParams = (params: ParamsDictionary): ParamsOutput => {
  const { operation } = params;
  const a = Number.parseFloat(params.a);
  const b = Number.parseFloat(params.b);

  switch (operation) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      break;
    default:
      throw new Error('operation must be one of "add", "subtract", "multiply", or "divide"');
  }

  if (Number.isNaN(a)) {
    throw new Error('a must be a number');
  }

  if (Number.isNaN(b)) {
    throw new Error('b must be a number');
  }

  return {
    operation,
    a,
    b,
  };
};

export default formatParams;
