import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface userPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: userPayload;
    }
  }
}

const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
      req.currentUser = jwt.verify(
        req.session.jwt,
        process.env.JWT_KEY!
    ) as userPayload;
  } catch (err) {}

  next();
};

export { currentUser };
