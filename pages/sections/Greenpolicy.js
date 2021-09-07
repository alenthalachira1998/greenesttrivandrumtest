import Head from 'next/head';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css'



export default function GreenPolicy() {
  return (
  
      <section id="green-policy">
      <button class=" lg:w-4/12 flex justify-between w-80 self-start align-center bg-transparent hover:bg-gray-100  py-4 pl-12 pr-2 border shadow-lg hover:border-transparent rounded mb-10 mt-10 mr-10">
<h2 className={styles.headerhead}>Green Policy </h2><h2><span className={styles.plus}>-</span></h2>
</button>
      <div className="grid xl:grid-cols-3 grid-cols-2  gap-4 justify-center ">
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Green Procurement Policy</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Optimization on Structural Design</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Certified Green Products</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Locally Avialable Materials</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Eco-friendly Wood Based Materials</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Alternate Construction Materials</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>Handling of construction Waste</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>E</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 border-green-100"><h2 className={styles.headerhead2}>E</h2></div>
</div>
</section>
  
  );
} 
