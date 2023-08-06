import PageHeading from '@/components/PageHeading/PageHeading'
import Head from 'next/head'
import HeadingAboutImg from "@/images/webps/heading-about.webp";

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
          label="Our Centers"
          breadcrumbs={[{ label: "Our Centers", url: "/about" }]}
        />
        </div>
      
    </>
  )
}
