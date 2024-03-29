import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Apex-Leather',
  keywords: 'Apex Leather',
  description:
    'PRO Services in UAE where PRO GCC team of expert Consultants handhold you throughout the required PRO Service Dubai from the beginning to the end with legal documentation.',
}

export default Meta
