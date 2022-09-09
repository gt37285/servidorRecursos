const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = ({ env }) => {
  const envList = ["prod", "dev"];
  if (!env)
    throw new Error("Se necesita declarar un ambiente de desarrollo válido");
  if (!envList.includes(env))
    throw new Error(
      `Especifica un ambiente válido, las opciones disponibles son: ${envList.join()}`
    );
  const envConfig = require(`./webpack.${env}.js`);
  return merge(common, envConfig);
};
