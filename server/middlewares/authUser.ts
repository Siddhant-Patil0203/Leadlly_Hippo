import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface ExtendedRequest extends Request {
  email?: string;
  userId?: string;
}

const authUser = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers?.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const decodedData = jwt.verify(token, process.env.USER!) as JwtPayload;

    req.email = decodedData?.email;
    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized" });
  }
};

export default authUser;
