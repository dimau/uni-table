const nanoid = require("nanoid");
const fastify = require("fastify")({ logger: true });
const { tasks } = require("./testData");

fastify.get("/tasks", async (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  return tasks;
});

fastify.get("/tasks/:id", async (request, reply) => {
  const { id } = request.params;
  return tasks[id] !== undefined ? tasks[id] : {};
});

fastify.post("/tasks", async (request, reply) => {
  const body = request.body;
  const id = nanoid.nanoid();
  body.id = id;
  tasks[id] = body;
});

fastify.delete("/tasks/:id", async (request, reply) => {
  const { id } = request.params;
  if (tasks[id] !== undefined) delete tasks[id];
});

/* Run the server! */
const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
