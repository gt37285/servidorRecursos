import { Request, Response } from "express";
import { existsSync } from "fs";
import { resolve } from "path";

export const getResource = (req: Request, res: Response) => {
  try {
    const { type, resource } = req.params;

    if (!type) {
      res.status(400).json({
        ok: false,
        msg: "No se especifico el tipo de recurso",
      });
    }

    if (!resource) {
      res.status(400).json({
        ok: false,
        msg: "No se especifico el nombre del recurso",
      });
    }

    const pathResource = resolve(__dirname, "..", "resources", type, resource);

    if (!existsSync(pathResource)) {
      return res.status(400).json({
        ok: false,
        msg: "No se encontró el recurso solicitado",
        pathResource,
      });
    }

    return res.sendFile(pathResource);
  } catch (error) {
    console.log(error);
  }
};
