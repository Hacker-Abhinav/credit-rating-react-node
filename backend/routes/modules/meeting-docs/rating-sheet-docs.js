const { writeFileSync, readFileSync } = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, UnderlineType, HeadingLevel } = require("docx");
const docxConverter = require('docx-pdf');
const moment = require("moment");
const puppeteer = require('puppeteer');
const { v4: uuidv4 } = require('uuid');
const { UPLOAD_TO_AZURE_STORAGE } = require("../../../helpers");
const { GET_RATING_SHEET_DATA } = require("../../../repositories/RatingSheetData");
const { CHECK_PERMISSIONS } = require("../../../helpers");
const { RatingCommitteeMeetingDocument } = require("../../../models/modules/rating-committee");

async function rating_sheet_docs_routes(fastify) {
  fastify.post('/rating_sheet/generate/docx', async (request, reply) => {
    try {

      await CHECK_PERMISSIONS(request, 'Rating.Letter')

      let document_url = ''

      const GENERATE_UUID = uuidv4();

      const path = `generated/rating_letter_doc_${GENERATE_UUID}.docx`

      const { params } = request.body;

      const data = await GET_RATING_SHEET_DATA({
        uuid: params["rating_committee_meeting_uuid"],
        is_active: true
      })

      const heading = new Paragraph({
        text: 'INFOMERICS VALUATION AND RATING PRIVATE LIMITED',
        alignment: AlignmentType.CENTER,
        allCaps: true,
        bold: true
      })

      const contact_info_1 = new Paragraph({
        text: 'Head Office-Flat No. 104/106/108, Golf Apartments, Sujan Singh Park, New Delhi-110003',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
      })

      const contact_info_2 = new Paragraph({
        text: 'Email: vma@infomerics.com, Website: https://www.infomerics.com',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
      })

      const contact_info_3 = new Paragraph({
        text: 'Phone: +91-11 24601142, 24611910, Fax: +91 11 24627549',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
      })

      const cin = new Paragraph({
        text: `(CIN: ${data[0].company_cin})`,
        alignment: AlignmentType.CENTER
      })

      const agenda_line = new Paragraph({
        text: "AGENDA",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER
      })

      const meeting_detail_head = new Paragraph({
        text: `Agenda for ${data[0].rating_committee_meeting_id} Rating Committee Meeting (RCM) for the Financial Year 2022-2023 of Infomerics Valuation and Rating Private Limited to be held on ${moment(data[0].meeting_at).format("dddd, MMMM Do YYYY, h:mm:ss a")} through video conference.`,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
      })

      const table_header = new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph("Sr. No")],
              }),
              new TableCell({
                children: [new Paragraph("Name of the Entity")],
              }),
              new TableCell({
                children: [new Paragraph("Instrument/Facility")]
              }),
              new TableCell({
                children: [new Paragraph("Size (Rs Crore)")]
              }),
              new TableCell({
                children: [new Paragraph("Nature of Assignment")]
              }),
              new TableCell({
                children: [new Paragraph("Existing Rating")]
              }),
              new TableCell({
                children: [new Paragraph("Proposed Rating")]
              }),
              new TableCell({
                children: [new Paragraph("Committee Assigned Rating")]
              })
            ],
          }),
        ]
      });

      let table_rows = [];
      let serial_number = 1;
      data.forEach(data => {
        table_rows.push(new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({ text: String(serial_number) })],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['entity_name'] })],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['instrument'] })],
            }),
            new TableCell({
              children: [new Paragraph(String({ text: data['size_in_crore'] }))],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['nature_of_assignment'] })],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['existing_rating'] })],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['proposed_rating'] })],
            }),
            new TableCell({
              children: [new Paragraph({ text: data['committee_assigned_rating'] })],
            }),
          ]
        }));
        serial_number++;
      });

      const table_rows_container = new Table({
        rows: table_rows
      });

      const doc = new Document({
        styles: {
          paragraphStyles: [
            {
              id: "Heading1",
              name: "Heading 1",
              basedOn: "Normal",
              next: "Normal",
              quickFormat: true,
              run: {
                size: 24,
                bold: true
              },
              paragraph: {
                spacing: {
                  after: 120,
                },
              },
            },
            {
              id: "Heading2",
              name: "Heading 2",
              basedOn: "Normal",
              next: "Normal",
              quickFormat: true,
              run: {
                size: 18,
                bold: true,
                underline: {
                  type: UnderlineType.DOUBLE,
                  color: "000000",
                },
              },
              paragraph: {
                spacing: {
                  before: 100,
                  after: 100,
                },
              },
            },
            {
              id: "aside",
              name: "Aside",
              basedOn: "Normal",
              next: "Normal",
              run: {
                color: "999999",
                italics: true,
              },
              paragraph: {
                indent: {
                  left: 720,
                },
                spacing: {
                  line: 276,
                },
              },
            },
          ],
        },
        sections: [
          {
            properties: {},
            children: [
              heading,
              contact_info_1,
              contact_info_2,
              contact_info_3,
              cin,
              agenda_line,
              meeting_detail_head,
              table_header,
              table_rows_container,
            ],
          },
        ],
      });

      const doc_url_promise = new Promise((resolve, reject) => {

        Packer.toBuffer(doc).then(async (buffer) => {
          let doc_fs = path;
          let pdf_fs = "generated/Sample_Document.pdf";
          writeFileSync(doc_fs, buffer);
  
          docxConverter(doc_fs, pdf_fs, function (err, result) {
            if (err) { console.log(err); }
          });
  
          const docx = readFileSync(path)
  
          document_url = await UPLOAD_TO_AZURE_STORAGE(docx, {
            path: doc_fs
          })
  
        await RatingCommitteeMeetingDocument.create({
          uuid: uuidv4(),
          path: document_url,
          is_active: true,
          rating_committee_meeting_id: data[0].id,
          doc_type: "docx",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: request.user.id
        })

        resolve(document_url)
  
        });

      })

      const document_link = await doc_url_promise

      var response = {};
      response['uuid'] = uuidv4();
      response['document_url'] = document_link;
      reply.send(response);
    } catch (error) {
      console.log("Error", error);
      return reply.send({
        "error": String(error),
      })
    }
  });

  fastify.post('/rating_sheet/generate/pdf', async (request, reply) => {
    try {

      await CHECK_PERMISSIONS(request, 'Rating.Letter')

      const { params } = request.body

      const GENERATE_UUID = uuidv4();

      const path = `generated/rating_letter_pdf_${GENERATE_UUID}.pdf`

      const data = await GET_RATING_SHEET_DATA({
        uuid: params["rating_committee_meeting_uuid"],
        is_active: true
      })

      const browser = await puppeteer.launch({
        headless: false,
        args: ['--headless']
      });
      const page = await browser.newPage();
      const html = await fastify.view(`templates/pdf/${params['filename']}.pug`, { data: data });
      await page.setContent(html, { waitUntil: 'domcontentloaded' });
      await page.emulateMediaType('screen');
      await page.pdf({
        path: path,
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
      });
      await browser.close();

      const pdf = readFileSync(path)

      const document_url = await UPLOAD_TO_AZURE_STORAGE(pdf, {
        path: params['filename']
      })

      await RatingCommitteeMeetingDocument.create({
        uuid: uuidv4(),
        path: document_url,
        is_active: true,
        rating_committee_meeting_id: data[0].id,
        doc_type: "pdf",
        created_at: new Date(),
        updated_at: new Date(),
        created_by: request.user.id
      })

      var response = {};
      response['uuid'] = uuidv4();
      response['document_url'] = document_url
      reply.send(response);
    } catch (error) {
      console.log("Error", error);
      return reply.send({
        "error": String(error),
      })
    }
  });
}

module.exports = {
  rating_sheet_docs_routes
};