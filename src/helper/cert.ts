import { readFileSync } from "fs";
import { resolve } from "path";

const certFolder = resolve(__dirname, "../cert");

export const cert = readFileSync(resolve(certFolder, "cert.pem"));
export const key = readFileSync(resolve(certFolder, "key.pem"));
