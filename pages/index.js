
import About from './sections/About';
import MainHome from './sections/MainHome'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Contact from './sections/Contact';
// import React, {useState, useEffect} from 'react';
// import Loading from '../components/Loading';



const index = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // })
  return (
    <>
    {/* {isLoading==true? <Loading/> :  */}
     {/* <div> */}
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
