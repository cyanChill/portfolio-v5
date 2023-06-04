import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    heroHex: { type: "string", required: true },
    projectName: { type: "string", required: true },
    duration: { type: "string", required: true },
    website: { type: "string", required: true },
    github: { type: "string", required: true },
  },
  computedFields: {
    projId: {
      type: "string",
      resolve: (proj) => proj.projectName.toLowerCase().replaceAll(" ", "-"),
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project],
});
