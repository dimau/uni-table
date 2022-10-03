const nanoid = require("nanoid");
const fastify = require("fastify")({ logger: true });
const { tasks } = require("./testData");

fastify.get("/tasks", async (request, reply) => {
  return tasks;
});

fastify.get("/tasks/:taskId", async (request, reply) => {
  const { taskId } = request.params;
  return tasks[taskId] !== undefined ? tasks[taskId] : {};
});

fastify.post("/tasks", async (request, reply) => {
  const body = request.body;
  const taskId = nanoid.nanoid();
  body.taskId = taskId;
  tasks[taskId] = body;
});

fastify.delete("/tasks/:taskId", async (request, reply) => {
  const { taskId } = request.params;
  if (tasks[taskId] !== undefined) delete tasks[taskId];
});

/* Run the server! */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
