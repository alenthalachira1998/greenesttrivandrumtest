// // // import { useState } from 'react';
// // // import { Link } from 'react-scroll';
// // // export  default function  Navbar () {

// // //   const [active, setActive] = useState(false);

// // //   const handleClick = () => {
// // //     setActive(!active);
// // //   };

// // //   return (
// // //     <>
  
   
     
// // //       <nav className='flex items-center flex-wrap bg-white-400 px-3  mt-2  rounded-lg border-2 border-yellow-600'>
// // //     <Link href='/'   activeClass="active"
// // //                 to={path}
// // //                 spy={true}
// // //                 smooth={true}
// // //                 offset={-70}
// // //                 duration={500}
// // //                 key={i} >
// // //           <a className='inline-flex items-center p-2 mr-4'>
// // //             <svg
// // //               viewBox='0 0 24 24'
// // //               xmlns='http://www.w3.org/2000/svg'
// // //               className='fill-current text-white h-8 w-8 mr-2'
// // //             >
// // //               <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
// // //             </svg>
// // //             <span className='text-xl text-white font-bold uppercase tracking-wide'>
// // //               Talwind CSS
// // //             </span>
// // //           </a>
// // //         </Link>
// // //         <button
// // //           className=' inline-flex p-3 hover:bg-green-700 rounded lg:hidden text-green-600 ml-auto hover:text-white  outline-none'
// // //           onClick={handleClick} 
// // //         >
// // //           <svg
// // //             className='w-6 h-6'
// // //             fill='none'
// // //             stroke='currentColor'
// // //             viewBox='0 0 24 24'
// // //             xmlns='http://www.w3.org/2000/svg'
// // //           >
// // //             <path
// // //               strokeLinecap='round'
// // //               strokeLinejoin='round'
// // //               strokeWidth={2}
// // //               d='M4 6h16M4 12h16M4 18h16'
// // //             />
// // //           </svg>
// // //         </button>
// // //         {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
// // //         <div
// // //           className={`${
// // //             active ? '' : 'hidden'
// // //           }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
// // //         >
// // //           <div  className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
// // //             <Link href='projects'   to={path}
// // //                 spy={true}
// // //                 smooth={true}
// // //                 offset={-70}
// // //                 duration={500}
// // //                 key={i}>
// // //               <a className=' font-bold text-green-700 text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center  xl:bg-none hover:text-green-500'>
// // //               projects
// // //                </a>
// // //             </Link>
// // //             <Link href='about'   activeClass="active"
// // //                 to={path}
// // //                 spy={true}
// // //                 smooth={true}
// // //                 offset={-70}
// // //                 duration={500}
// // //                 key={i}>
        
// // //               <a className=' font-bold text-green-700 text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center  xl:bg-none hover:text-green-500'>

// // //               About
// // //               </a>
             
// // //             </Link>
// // //             <Link href='contact'   activeClass="active"
// // //                 to={path}
// // //                 spy={true}
// // //                 smooth={true}
// // //                 offset={-70}
// // //                 duration={500}
// // //                 key={i}>
// // //               <a className='font-bold text-green-700 text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center  xl:bg-none hover:text-green-500'>
// // //               Contact
// // //               </a>
// // //             </Link>
// // //             <Link href='blog' activeClass="active"
// // //                 to={path}
// // //                 spy={true}
// // //                 smooth={true}
// // //                 offset={-70}
// // //                 duration={500}
// // //                 key={i}>
// // //               <a className=' font-bold text-green-700 text-xl lg:inline-flex lg:w-auto w-full px-3 py-2  rounded items-center justify-center  xl:bg-none hover:text-green-500'>
// // //               Blog
// // //               </a>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </nav>
      
// // //     </>
// // //   );
// // // };
// // 
import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import Image from 'next/image'
import { Link } from 'react-scroll';
import {useState,useEffect} from 'react'
import LinkS from 'next/link'


export default function Navbar({ fixed }) {
  
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 w-full z-10 bg-white   py-2 justify-around navbar ">
        <div className="relative flex flex-wrap items-center justify-between px-2   ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           
          
               
         
           <LinkS href="/">
                <a>
          <Image
        src="/logo.png"
        alt="Picture of the author"
        width={120}
        height={40}
      />  
      </a>
        </LinkS>
       
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <i className="text-black"><AiOutlineMenu/></i> 
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ml-2 text-gray-600">
              <Link to='about'
               spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass="text-green-500 active " className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 hover:text-green-500 cursor-pointer"
                
                >
          
                About
                 
              
            </Link>
            </li>
              
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 hover:text-green-500"
                  href="#pablo"
                >
                  <span className="ml-2">Project</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600  hover:text-green-500"
                  href="#pablo"
                >
                <span className="ml-2">Blog</span>
                </a>
                
              </li>
              <li className="nav-item">
              <Link to='contact'
               spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass="text-green-500 active " className="pl-2 pr-2 py-2  lg:ml-8 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 bg-white  border-2 border-green-500 hover:bg-green-500 ml-2 hover:text-white  cursor-pointer"
                
                
              >Contact</Link>
              

              
                
              </li>
             
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
