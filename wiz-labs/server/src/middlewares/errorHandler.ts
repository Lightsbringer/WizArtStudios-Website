import { ErrorRequestHandler } from 'express';
import CustomError from '../types/CustomError';

const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  req,
  res,
  next
) => {
  res
    .status(err.errorCode)
    .json({ errorCode: err.errorCode, message: err.message });
};

export default errorHandler;
