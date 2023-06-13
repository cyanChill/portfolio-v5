type EmbedPDFProps = {
  src: string;
  docName: string;
};

export default function MdxEmbedPDF({ src, docName }: EmbedPDFProps) {
  return (
    <>
      <embed
        src={src}
        type="application/pdf"
        width="100%"
        height="650px"
        className="hidden sm:block"
      />
      <a
        href={src}
        target="_blank"
        referrerPolicy="no-referrer"
        className="sm:hidden"
      >
        Click here to view the {docName}
      </a>
    </>
  );
}
