import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

// Custom components we'll override with
const components = {
  Image,
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
