import { Request, Response } from 'express';
import rollbar from '../rollbar';
import formatParams from '../formatParams';
import {
  add, subtract, multiply, divide,
} from '../../js/utilities/arithmetic';
import getErrorMessage from '../../js/utilities/getErrorMessage';
import { math as mathPage } from '../../pages';

const math = (request: Request, response: Response) => {
  try {
    const { operation, a, b } = formatParams(request.params);

    switch (operation) {
      case 'add':
        response.send(mathPage(operation, `${a} + ${b} = ${add(a, b)}`));
        break;
      case 'subtract':
        response.send(mathPage(operation, `${a} - ${b} = ${subtract(a, b)}`));
        break;
      case 'multiply':
        response.send(mathPage(operation, `${a} &times; ${b} = ${multiply(a, b)}`));
        break;
      case 'divide':
        response.send(mathPage(operation, `${a} &divide; ${b} = ${divide(a, b)}`));
        break;
      default:
    }
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    rollbar.error(errorMessage, request);

    response.status(400).send(getErrorMessage(errorMessage));
  }
};

export { math };
