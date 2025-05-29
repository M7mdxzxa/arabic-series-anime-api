const fastify = require("fastify")(); // Create Fastify instance
const { attachApi } = require("msiki");

(async () => {
  const app = await attachApi(fastify);
  const PORT = process.env.PORT || 3000;
  await app.listen({ port: PORT, host: "0.0.0.0" }, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
