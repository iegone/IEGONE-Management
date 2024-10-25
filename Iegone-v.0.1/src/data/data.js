const jobNumber = "jobNumber";
const clientName = "clientName";
const wellNumber = "wellNumber";
const jobTypeSurvey = "jobTypeSurvey";
const depthStart = "depthStart";
const depthEnd = "depthEnd";
const date = "date";
const holeNumber = "H" + "holeNumber";
const SectionNumber = holeNumber + "SectionNumber";
const filePath = "/Documents";
const rigNumber = "Rig" + "rigNumber";
const rigName = "rigName";
const rigLocation = "rigLocation";




const mainFolder = {
  file: `${jobNumber}_${clientName}_${wellNumber}_${rigNumber} ${jobTypeSurvey} (${depthStart}-${depthEnd}) ${date}`,
  filePath: { filePath },
  fileType: "folder",
  subFolders: [
    {
      fileName: "Rig Submission",
      fileType: "folder",
      subFolders: [
        {
          fileName: "Job Paper Work",
          fileType: "folder",
          subFolders: [
            {
              fileName: "1-Job Ticket",
              fileType: "pdf",
            },
            {
              fileName: "2-JOB DATA SHEET",
              fileType: "pdf",
            },
            {
              fileName: "3-Data Quality Sheet",
              fileType: "pdf",
            },
            {
              fileName: "4-Tool Job Verification",
              fileType: "pdf",
            },
            {
              fileName: "5-CUSTOMER SATISFACTION SURVEY",
              fileType: "pdf",
            },
            {
              fileName: "6-Job Safety Analysis JSA",
              fileType: "pdf",
            },
          ],
        },
        {
          fileName: `${wellNumber}${holeNumber}-${SectionNumber}-In Run`,
          fileType: "pdf",
        },
        {
          fileName: `${wellNumber}${holeNumber}-${SectionNumber}-Out Run`,
          fileType: "pdf",
        },
        {
          fileName: `${wellNumber}${holeNumber}-${SectionNumber}-In Run`,
          fileType: "xlsx",
        },
        {
          fileName: `${wellNumber}${holeNumber}-${SectionNumber}-Out Run`,
          fileType: "xlsx",
        },
      ],
    },
    {
      file: `${rigName}_${rigNumber}_${jobTypeSurvey}`,
      fileType: "excel",
    },
    {
      file: "Raw Data",
      fileType: "folder",
      subFolders: [
        {
          fileName: "Screen Capture",
          fileType: "folder",
        },
        {
          fileName: "PRE Tool Job Verification",
          fileType: "folder",
        },
        {
          fileName: {rigLocation},
          fileType: "mdb",
        },
        {
          fileName: `${wellNumber}${holeNumber}-${rigNumber}`,
          fileType: "gpd",
        },
        {
          fileName: `${wellNumber}_${rigNumber}.csv`,
          fileType: "csv",
        },
      ],
    },
    {
      file: "Other Data",
      fileType: "folder",
      subFolders: [
        {
          fileName: "OUT RUN",
          fileType: "xls",
        },
        {
          fileName: "IN RUN",
          fileType: "xls",
        },
      ],
    },
  ],
};

export default mainFolder;