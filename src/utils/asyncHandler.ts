/**
 * @description - A utility function to handle async/await errors
 * @param {Function} requestHandler - The function to be executed
 */

import { NextFunction, Request, Response } from "express";

const asyncHandler = (requestHandler: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
