
import About from './sections/About';
import MainHome from './sections/MainHome'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Contact from './sections/Contact';


const index = () => {

  return (
    <>
  
    <Head>
    <title>Home</title>
    <link rel='icon' href='/favicon.ico' />
  </Head>
  <Navbar/>
   <MainHome/>

   <About/>
   <Contact/>
    {/* </div>  */}
     
    
    {/* } */}
    </>
  )
}

export default index
