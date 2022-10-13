import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";
class App {
  public app: Application;
  public port: number;
  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.setMiddleware();
    this.registerRoutes();
  }

  private setMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  private registerRoutes() {
    this.app.use("/api/v1", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port} 🚀`);
    });
  }
}

export default App;
