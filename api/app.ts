import express, { NextFunction } from "express";
import todoRoutes from "./routes/todos";
import path from "path";
import { json } from "body-parser";
import testAPIrouter from "./routes/testAPI";

const app = express();

app.use(json());

app.use("/", todoRoutes);
app.use("/api", testAPIrouter);
app.use(express.static(path.join(__dirname, "../react-app/build")));
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    res.status(200).json({ message: "Sucess" });
  }
);

app.listen(9000, () => {
  console.log(`App listening on port ${9000}`);
  console.log("Press Ctrl+C to quit.");
});
