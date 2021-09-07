import Head from 'next/head';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'



export default function DesignFeatures() {
  return (
    <section id="design-features">
      
      <button class=" lg:w-4/12 flex justify-between w-80 self-start align-center bg-transparent hover:bg-gray-100  py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10 mr-10">
<h2 className={styles.headerhead}>Design Quality </h2><h2><span className={styles.plus}>-</span></h2>
</button>
      <div className="grid xl:grid-cols-3 grid-cols-2  gap-4 justify-center ">
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-gray-100 to-purple-400 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-red-200 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-green-200 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-blue-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-green-200 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-red-200 to-green-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-yellow-300 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-green-400 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl  h-44 flex justify-center items-center bg-gradient-to-r from-green-200 to-yellow-100 bg-opacity-10   relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"><h2 className={styles.headerhead2}>Passive Architecture</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Integrated Design Process</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Universal Design</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Biophilic Design</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>High-performance</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Codes of Practice</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>IGBC Pre-certified</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Net Zero Energy Building</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Vastu Compliant</h2></div>
</div>
  <div className="App bg-green-500 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className=" bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
     
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-poppins text-2xl tracking-widest'>Login form</div>
            <input type="text" placeholder='username' className='input-text'/>
            <input type="password" placeholder='password' className='input-text'/>
            <input type="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
          </form>
        </div>
     
    </div>
    </section>
   
  );
} 
