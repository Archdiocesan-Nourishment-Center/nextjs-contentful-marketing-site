import Head from 'next/head'
import HeadingAboutImg from '@/images/webps/heading-about.webp';
import PageHeading from '@/components/PageHeading/PageHeading';

export default function Page() {
  return (
    <>
      <Head>
        <title>Archdiocesan Nourishment Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
        <div className='min-h-[500px]'>
        <PageHeading
          bgImage={HeadingAboutImg}
          label="History"
          breadcrumbs={[{ label: "About Us", url: "/about" },{ label: "History", url: "/about" }]}
        />
        </div>
      
    </>
  )
}
