const { GET_MIS_REPORT, GET_MIS_REPORTS, GET_MIS_REPORT_DATA } = require("../../../repositories/MISReportRepository");
const { GetConfigSchema } = require("../../../schemas/MIS/GetConfigSchema");

async function mis_reports_routes(fastify) {
  fastify.register((instance, opts, done) => {
    fastify.addHook("onRequest", async () => {
    });

    fastify.post("/mis/reports", async (request, reply) => {
      try {
        // await CHECK_PERMISSIONS(request, 'Interactions.List');
        const reports = await GET_MIS_REPORTS();

        return reply.send({
          success: true,
          reports: reports,
        });
      }
      
      catch (error) {
        reply.statusCode = 422;
        return reply.send(error);
      }
    });

    fastify.post("/mis/report_by_type", { schema: GetConfigSchema }, async (request, reply) => {
      try {
        // await CHECK_PERMISSIONS(request, 'Interactions.List');
        const { type } = request.body['params'];
        const report = await GET_MIS_REPORT({ type });
        const data = await GET_MIS_REPORT_DATA(report);

        return reply.send({
          success: true,
          report: report,
          data: data,
        });
      }
      
      catch (error) {
        reply.statusCode = 422;
        return reply.send(error);
      }
    });

    done();
  });
}

module.exports = {
  mis_reports_routes,
};
