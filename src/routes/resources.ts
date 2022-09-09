import { Router } from "express";
import { getResource } from "@services/resource";

export default class ResourcesRoutes {
  private readonly route: Router;

  constructor() {
    this.route = Router();

    this.init();
  }

  public static init() {
    return new ResourcesRoutes();
  }

  private init() {
    this.Route.route("/:type/:resource").get(getResource);
  }

  get Route() {
    return this.route;
  }
}
