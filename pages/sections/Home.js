import Head from 'next/head';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="flex flex-col items-center mt-10 mx-10 ">
      <p className="max-w-full  font-light text-xl">Greenest ONE offers our customers a functionally designed home with enhanced quality of
space and life. Project is located in a calm, clean, well connected and lush green location
within Thiruvananthapuram Corporation, at Njandoorkonam. Project consist of 30 high-
performance individual villa units, club house and lots of recreational and easy go common
amenities.</p>
<h1 className="text-2xl mt-6 self-start">Features and Speciality</h1> 
<Link href="/designfeatures">
          <a class=" lg:w-4/12 flex justify-between w-80 self-start align-center bg-transparent hover:bg-gray-100  py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10 mr-10">
<h2 className={styles.headerhead}>Design Quality </h2><h2><span className={styles.plus}>+</span></h2>
</a>
        </Link>
<button class=" lg:w-4/12 flex justify-between w-80 self-start align-center bg-transparent hover:bg-gray-100  py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10 mr-10">
<h2 className={styles.headerhead}>Design Quality </h2><h2><span className={styles.plus}>+</span></h2>
</button>
<button class="lg:w-4/12 w-80 flex justify-between  self-start align-center bg-transparent hover:bg-gray-100  text-blue-700 font-semibold hover:text-white py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10">
<h2 className={styles.headerhead}>Build Quality </h2><h2><span className={styles.plus}>+</span></h2>
</button>
<button class="lg:w-4/12 w-80 flex justify-between  self-start align-center bg-transparent hover:bg-gray-100  text-blue-700 font-semibold hover:text-white py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10">
<h2 className={styles.headerhead}>Life In ONE </h2><h2><span className={styles.plus}>+</span></h2>
</button>
      </div>
     
    </>
  );
} 
