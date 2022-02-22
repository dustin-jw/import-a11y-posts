import { Request, Response } from 'express';
import rollbar from '../rollbar';
import { notFound } from '.';

const request = {} as Request;
const response = {
  status: jest.fn(() => ({
    send: jest.fn(),
  })),
} as unknown as Response;

describe('404 route', () => {
  it('logs a warning to rollbar', () => {
    const statusSpy = jest.spyOn(response, 'status');
    const warnSpy = jest.spyOn(rollbar, 'warn');

    notFound(request, response);
    expect(statusSpy).toHaveBeenCalledWith(404);
    expect(warnSpy).toHaveBeenCalledWith('Resource not found', {});
  });
});
