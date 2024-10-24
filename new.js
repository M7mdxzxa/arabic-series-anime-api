const fastify = require("fastify")(); // a new fastify app
const { attachApi } = require("siki");

(async()=> {
    const app = await attachApi(fastify) // returns the fastifyApp after attaching certian routes.
    await app.listen({ port: 80 }, ()=> console.log("Server is up!")) // starting the server!
})()