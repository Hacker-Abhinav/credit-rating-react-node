const { outlook_routes } = require("./outlook");
const { rating_model_routes } = require("./rating-model");
const { rating_committee_routes } = require("./rating-committee");
const { due_diligence_json } = require("./due-dilligence")
const { interaction_routes } = require("./interaction");
const { workflows_routes } = require("./workflow");
const { inbox_routes } = require("./inbox");
const { rating_sheet_docs_routes } = require("./meeting-docs/rating-sheet-docs")
const { agenda_docs_routes } = require("./meeting-docs/agenda-docs")
const { mis_reports_routes } = require("./mis/reports");
const { press_release_docs_routes } = require("./meeting-docs/press-release-docs");

module.exports = {
  outlook_routes,
  rating_model_routes,
  rating_committee_routes,
  due_diligence_json,
  interaction_routes,
  workflows_routes,
  inbox_routes,
  mis_reports_routes,
  rating_sheet_docs_routes,
  agenda_docs_routes,
  press_release_docs_routes
};