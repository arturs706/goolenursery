import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/Slider'
import { useRef, useEffect } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap';

export default function Page() {
  const containerRef = useRef(null);
  useEffect(()=>{
    gsap.fromTo(containerRef.current,{
      rotation: 0
    },{
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    })
  })
  return (
  <div>
  <div className="overflow-hidden flex">

    <div className="w-1/12 h-screen justify-center flex-col items-center hidden lg:flex">
      <div className="h-1/3 flex flex-col justify-between absolute left-9 top-60">
          <h2 className=' skew-x-12'><Link href="https://www.facebook.com/jekaterina.jermakova.52"><a>FB</a></Link></h2>
          <h2 className=' skew-x-12'><Link href="https://www.instagram.com/"><a>IG</a></Link></h2>
          <h2 className=' skew-x-12'><Link href="https://vk.com/"><a>VK</a></Link></h2>
      </div>
    </div>

    <div className="w-full flex flex-col justify-start">
      <div className="flex flex-row justify-items-start">
        <h2 className="text-9xl">MAINE</h2>
        <h2 className="text-9xl pl-10">COON</h2>
      </div>
      <div className=" flex-row flex justify-between pr-10">
      <div className="relative top-6 left-5" ref={containerRef}>
      <Image
          src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1643138631/Test_cat/Untitled-4_bjivq4.svg"
          width = {150}
          height = {150}
          alt = "spinner"
        />
        </div>
        <h2 className="text-9xl">NURSERY</h2> 
      </div>
      <div className=" flex-row flex justify-evenly">
      
        <h1 className="text-10xl">KLEOOKET</h1> 
      </div>
    </div>
    
    </div>
    
    <div className = "second-div"></div>

    <Slider/>
    </div>
  )
  }
