import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel';

export default function Page() {
  return (
    <>
      <Head>
        <title>Archdiocesan Nourishment Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
        <div className='min-h-[calc(100vh-157px-408px-32px)]'>
          <Carousel />
        </div>
      
    </>
  )
}
