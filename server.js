// eslint-disable-next-line @typescript-eslint/no-var-requires
const zappPipesDevKit = require("@applicaster/zapp-pipes-dev-kit");
import provider from "./lib";

const port = process.env.PORT || 8080;
const host = process.env.HOST || "0.0.0.0";

const zappPipesServer = zappPipesDevKit.createZappPipesServer({
  providers: [provider],
  host,
  port
});

zappPipesServer.route({
  method: "GET",
  path: "/{provider}/types",
  handler(req, reply) {
    reply(provider.manifest.handlers);
  }
});

zappPipesServer.startServer();
