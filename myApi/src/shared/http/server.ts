import "dotenv/config";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes";
import { AppError } from "@shared/errors/AppError";
import swaggerFile from "../../swagger.json";

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

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} 🚀`);
});
