import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap" ;
import 'remixicon/fonts/remixicon.css'

function App() {
    let [showContent, setShowContent] = useState(false);

    useGSAP(()=>{
      const tl =gsap.timeline();



      tl.to(".vi-mask-group",{
        rotate:10,
        duration:2,  
        ease:"Power4.easeInOut",
        transformOrigin:"50% 50%"
      })
      .to(".vi-mask-group",{
          scale:10,
          duration:2,
          delay: -1.8,
          ease:"Expo.easeInOut",
          transformOrigin:"50% 50%",
          opacity:0,
          onUpdate:function(){
            if(this.progress() >=.9){
              document.querySelector(".svg").remove();
              setShowContent(true);
              this.kill();
            }
          }
      })
    })
    
    useGSAP(()=>{
      if(!showContent) return;  

      gsap.to(".main",{
        scale:1,
        rotate:0,
        duration:2,
        delay:-1,
        ease:"expo.inOut",
      })
      gsap.to(".sky",{
        scale:1.1,
        rotate:0,
        duration:2,
        delay:-.8,
        ease:"expo.inOut",
      })
       gsap.to(".bg",{
        scale:1.1,
        rotate:0,
        duration:2,
        delay:-.8,
        ease:"expo.inOut",
      })
      gsap.to(".character",{
        scale:1.4,
        x:"-50%",
        bottom:"-25%",
        rotate:0,
        duration:2,
        delay:-.8,
        ease:"expo.inOut",
      })
       gsap.to(".text",{
        scale:1,
        x:"-50%",
        bottom:"-25%",
        rotate:0,
        duration:2,
        delay:-.8,
        ease:"expo.inOut",
      })
      const main =document.querySelector(".main");

      main?.addEventListener("mousemove",function(e){
        const xMove= (e.clientX/ window.innerWidth - .5) * 40;
        gsap.to(".imagesdiv .text" ,{
          x:`${xMove * 0.4}%`,
        });
         gsap.to(".sky" ,{
          x:xMove,
        });
         gsap.to(".bg" ,{
          x:xMove*1.7,
        });
      })
    },[showContent]);

  return (
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
       <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
             <rect width="100%" height="100%" fill="black"/>
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                    VI
                </text>
              </g>
            </mask>
          </defs>
          <image 
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
       </svg>
    </div>
    {showContent && (
      <div className="main w-full rotate-[-10deg] scale-[1.7] ">
      <div className="landing overflow-hidden relative w-full h-screen  bg-black">
        <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
          <div className="logo flex gap-5">
            <div className="lines flex flex-col gap-[4px]"> 
              <div className="line w-10 h-1 bg-white"></div>
              <div className="line w-5 h-1 bg-white"></div>
              <div className="line w-3 h-1 bg-white"></div>

            </div>
            <h3 className="text-2xl -mt-[7px] leading-none text-white">ROCKSTAR</h3>
          </div>
        </div>
        
          <div className="imagesdiv relative overflow-hidden w-full h-screen ">
            <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"src="./sky.png" alt="" />
            <img className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt=""/>
            <div className="text text-white flex flex-col gap-3 absolute top-15 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
              <h1 className="text-[7rem] leading-none -ml-18">grand</h1>
              <h1 className="text-[7rem] leading-none ml-12">theft</h1> 
              <h1 className="text-[7rem] leading-none -ml-18">auto</h1>
            </div>
            <img className="absolute character -bottom-[150%] left-1/2 -translate-1/2 scale-[3] rotate-[-20deg] " src="./boy.png" alt=""/>
            
          </div>
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center ">
              <i className=" text-2xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
            </div>
            <img className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png"></img>
          </div>
      </div>
        <div className="w-full h-screen px-10 flex items-center justify-center  bg-black">
          <div className='cntnr flex text-white w-full h-[90%]'>
          <div className="limg relative w-1/2 h-full ">
            <img className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt=""></img>
          </div>
          <div className='rg w-[40%] py-20' >
            <h1 className="text-6xl">Still Running, </h1>
            <h1 className="text-6xl">Not Hunting </h1>
            <p className="mt-10  font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur maiores perspiciatis recusandae hic itaque doloribus nisi, deserunt, consequatur libero atque dignissimos ullam!</p>
            <p className="mt-3  font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem excepturi ullam pariatur, odio iure optio qui corporis debitis ex dignissimos quae, voluptates dolorum ipsum sed. Voluptatibus, aperiam dolor eaque ratione nesciunt esse similique id.</p>
            <p className="mt-3 font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem excepturi ullam pariatur, odio iure optio qui corporis debitis ex dignissimos quae, voluptates dolorum ipsum sed. Voluptatibus, aperiam dolor eaque ratione nesciunt esse similique id.</p>
            <button className="bg-yellow-500 px-10 py-10 mt-10 text-black text-3xl">Download Now</button>
          </div>
        </div>
        </div>
      </div>
    )}
    </>  
  )
}

export default App
