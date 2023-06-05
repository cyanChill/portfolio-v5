import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
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
  mdx: {
    remarkPlugins: [
      remarkGfm, // For strike through, tables, etc.
    ],
    rehypePlugins: [
      [
        rehypePrettyCode, // For better code blocks
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      rehypeSlug, // For creating slugs for headings
      [
        rehypeAutolinkHeadings, // Create links to headers in markdown
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
