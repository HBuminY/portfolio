const fs = require('fs');


/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    filePath='./svelte_view/index.html';
    const stream = fs.createReadStream(filePath, 'utf8')
    reply.header('Content-Type', 'text/html')
    return reply.send(stream)
  });
}

module.exports = routes