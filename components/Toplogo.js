import Image from "next/image";
const Toplogo = () => {
    return (
        <div className="flex justify-end  mr-5 ml-5  "> <Image src="/logo.png "  alt="Next.js"
        width="200"
        height="85"
        layout="intrinsic"/></div>
     
    );
  };
  
  export default Toplogo;
  