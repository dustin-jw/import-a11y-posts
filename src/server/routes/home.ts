import { Request, Response } from 'express';
import { home as homePage } from '../../pages';

const home = (request: Request, response: Response) => {
  response.send(homePage());
};

export { home };
