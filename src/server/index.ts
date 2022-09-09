import Routes from "@routes";
import express, { Application, Router } from "express";

export default class Server {
  private app: Application;
  private port: number;
  private readonly endpoint: Array<Router>;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.endpoint = Routes;

    this.init();
  }

  private init() {
    this.app.use(function setCommonHeaders(req, res, next) {
      const allowedOrigins = [
        "http://localhost",
        "http://127.0.0.1",
        "http://5.189.136.38",
        "http://velchfact-facturacionelectronica.com",
      ];

      const origin = req.headers.origin;

      if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
      }
      res.set("Access-Control-Allow-Private-Network", "true");
      res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Credentials", true as any);

      next();
    });

    this.app.use(this.endpoint);
  }

  public listen() {
    return this.app.listen(this.port, () => {
      console.log(`listen server resources in port: ${this.port}`);
    });
  }

  get Port() {
    return this.port;
  }

  get App() {
    return this.app;
  }
}
