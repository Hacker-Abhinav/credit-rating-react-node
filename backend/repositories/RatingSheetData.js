const { QueryTypes } = require("sequelize");
const { DB_CLIENT } = require("../db");
const { RatingCommitteeMeeting } = require("../models/modules/rating-committee");

// GET_RATING_SHEET_DATA
async function GET_RATING_SHEET_DATA(query) {
  return new Promise(async (resolve, reject) => {
    
    const rating_committee_meeting = await RatingCommitteeMeeting.findOne({
        where:  query,
        raw: true
      })

      if (!rating_committee_meeting) {
        reply.status_code = 403;
        return reply.send({
          success: false,
          error: "NO_RATING_COMMITTEE_MEETING_FOUND",
        });
      }

      const rating_sheet_data = await DB_CLIENT.query(`
        SELECT c.name AS entity_name, c.cin AS company_cin, ic.category_name AS instrument, m.total_size AS size_in_crore, rp.name AS nature_of_assignment, rcmr.short_term_rating_recommendation AS existing_rating, rcmr.long_term_rating_recommendation AS proposed_rating,
        rcvm.rating AS committee_assigned_rating, rcm.id AS rating_committee_meeting_id, rcm.meeting_at AS meeting_at FROM  rating_committee_meeting_registers rcmr 
        LEFT JOIN companies c ON c.id = rcmr.company_id
        LEFT JOIN mandates m ON m.id = rcmr.mandate_id
        LEFT JOIN instrument_categories ic ON ic.id = rcmr.instrument_category_id
        LEFT JOIN instrument_details id ON id.id = rcmr.instrument_detail_id
        LEFT JOIN rating_processes rp ON rp.id = id.rating_process_id
        LEFT JOIN rating_committee_meetings rcm ON rcm.id = :rating_committee_meeting_id
        LEFT JOIN rating_committee_voting_metadata rcvm ON rcvm.id = :rating_committee_meeting_id
        WHERE rcmr.rating_committee_meeting_id = :rating_committee_meeting_id
      `, {
        replacements: {
          rating_committee_meeting_id: rating_committee_meeting.id,
        },
        type: QueryTypes.SELECT,
      });
    
      if (rating_sheet_data) resolve(rating_sheet_data)

    else {
      reject({
        success: false,
        error: "RATING_SHEET_DATA_NOT_FOUND",
      });
    }
  });
}

module.exports = {
  GET_RATING_SHEET_DATA,
}