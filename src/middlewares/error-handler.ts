import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
    return;
  }

  console.error(err);
  res.status(400).send({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};

export { errorHandler };
