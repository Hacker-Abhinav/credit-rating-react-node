const { LOG_TO_DB } = require("../logger");
const { warning_logger } = require("../loki-push-agent");

async function base_routes (fastify, options) {
  fastify.post('/', async (request, reply) => {
    await LOG_TO_DB(request, {
      'activity': 'PING',
      'params': null,
    });

    let warning_log = {
      'api': 'v1:ping',
      'activity': 'PING',
      'params': {
        'ip_location': request.ip,
      },
    };
    warning_logger.info(JSON.stringify(warning_log));

    return reply.send({
      "api": "v1",
      "name": "trading-assist",
      "developed_for": "abhinav",
      "developed_by": "abhinav",
    });
  });
}

module.exports = {
  base_routes
};