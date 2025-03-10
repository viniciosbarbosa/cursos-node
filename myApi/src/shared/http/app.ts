import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../swagger.json";
import { routes } from "./routes";
import { AppError } from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    console.error(error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

export { app };
