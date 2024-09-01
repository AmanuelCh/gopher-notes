import { Helmet } from 'react-helmet-async';

type Props = {
  title: string | undefined;
  description: string;
  name: string;
  type: string;
};

export default function SEO({ title, description, name, type }: Props) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />

      {/* Facebook tags */}
      <meta
        property='og:type'
        content={type}
      />
      <meta
        property='og:title'
        content={title}
      />
      <meta
        property='og:description'
        content={description}
      />

      <meta
        property='og:image'
        content='/go-meta.png'
      />

      {/* Twitter tags */}
      <meta
        name='twitter:creator'
        content={name}
      />
      <meta
        name='twitter:card'
        content={type}
      />
      <meta
        name='twitter:title'
        content={title}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:image'
        content='/go-meta.png'
      />
    </Helmet>
  );
}
