import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta = ({ title, keywords, description, image }: Props): JSX.Element => {
  title = title.includes("Ahmad") ? title : title.concat(" | Pedro Caetano");
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/logo512.png"} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Pedro Caetano - React Developer Pleno",
  keywords: "web development, programming, web design",
  description: "Software Engineer. Lover of web and opensource.",
};

export default Meta;
