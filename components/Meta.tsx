import Head from 'next/head';

import { FC } from 'react';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta: FC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'CubedBook',
  description: 'Visualization tool for your next math lessons',
  keywords: 'visualization, math, animation, graphics',
};

export default Meta;
