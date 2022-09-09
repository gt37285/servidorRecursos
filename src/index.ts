import Server from "@server/index";

const main = () => {
  try {
    const port = process.env.PORT;

    if (!port) {
      throw new Error("Especifique el puerto");
    }

    const server = new Server(Number(port));
    server.listen();
  } catch (error) {
    console.log(error);
  }
};

(() => {
  main();
})();
