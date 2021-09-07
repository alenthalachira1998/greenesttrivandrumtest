// import Layout from '../components/Layout';
// // import '../styles/globals.css';
// import '../styles/index.css';
// import '../css/main.css'



// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;
import Layout from '../components/Layout';
import { useRouter } from "next/router";
// import '../styles/globals.css';
import '../styles/index.css';
import '../css/main.css'
import Loader from '../components/Loader';
import {useState, useEffect} from "react";
import Loading from '../components/Loading';
import Image from 'next/image'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })

  return (
    <>
    {/* {loading && <Loader/> } */}
     {isLoading==true? <div className="flex  flex-col h-screen items-center justify-center" ><Loading/> <Image src="/logoo.png" width={100} height={100}/></div> :  
    <Layout>
      <Component {...pageProps} />
      </Layout>
}
   </>
  );
}

export default MyApp;

