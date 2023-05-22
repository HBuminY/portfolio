const path = require('path');


/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = require('fastify')({
    logger: true
})

//CORE PLUGINS
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, './svelte_view'),
})

fastify.register(require('./fastifyPlugins/routes.js'))

fastify.listen({ port: '0.0.0.0' }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})