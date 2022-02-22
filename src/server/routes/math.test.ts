import { Request, Response } from 'express';
import rollbar from '../rollbar';
import { math } from '.';
import { math as mathPage } from '../../pages';

const response = {
  status: jest.fn(() => ({
    send: jest.fn(),
  })),
  send: jest.fn(),
} as unknown as Response;

const statusSpy = jest.spyOn(response, 'status');
const errorSpy = jest.spyOn(rollbar, 'error');
const sendSpy = jest.spyOn(response, 'send');

describe('math route', () => {
  beforeEach(() => {
    statusSpy.mockClear();
    errorSpy.mockClear();
    sendSpy.mockClear();
  });

  it('handles addition correctly', () => {
    const request = {
      params: {
        operation: 'add',
        a: 2,
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);

    expect(sendSpy).toHaveBeenCalledWith(mathPage('add', '2 + 2 = 4'));
    expect(statusSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('handles subtraction correctly', () => {
    const request = {
      params: {
        operation: 'subtract',
        a: 2,
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);

    expect(sendSpy).toHaveBeenCalledWith(mathPage('subtract', '2 - 2 = 0'));
    expect(statusSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('handles multiplication correctly', () => {
    const request = {
      params: {
        operation: 'multiply',
        a: 2,
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);

    expect(sendSpy).toHaveBeenCalledWith(mathPage('multiply', '2 &times; 2 = 4'));
    expect(statusSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('handles division correctly', () => {
    const request = {
      params: {
        operation: 'divide',
        a: 2,
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);

    expect(sendSpy).toHaveBeenCalledWith(mathPage('divide', '2 &divide; 2 = 1'));
    expect(statusSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('logs an error to rollbar for missing params', () => {
    const request = {} as Request;

    math(request, response);
    expect(statusSpy).toHaveBeenCalledWith(400);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Cannot destructure property 'operation' of"), {});
  });

  it('logs an error to rollbar for invalid operation', () => {
    const request = {
      params: {
        operation: 'nthPower',
        a: 2,
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);
    expect(statusSpy).toHaveBeenCalledWith(400);
    expect(errorSpy).toHaveBeenCalledWith('operation must be one of "add", "subtract", "multiply", or "divide"', request);
  });

  it('logs an error to rollbar for invalid "a" param', () => {
    const request = {
      params: {
        operation: 'add',
        a: 'foo',
        b: 2,
      } as unknown,
    } as Request;

    math(request, response);
    expect(statusSpy).toHaveBeenCalledWith(400);
    expect(errorSpy).toHaveBeenCalledWith('a must be a number', request);
  });

  it('logs an error to rollbar for invalid "b" param', () => {
    const request = {
      params: {
        operation: 'add',
        a: 2,
        b: 'bar',
      } as unknown,
    } as Request;

    math(request, response);
    expect(statusSpy).toHaveBeenCalledWith(400);
    expect(errorSpy).toHaveBeenCalledWith('b must be a number', request);
  });
});
