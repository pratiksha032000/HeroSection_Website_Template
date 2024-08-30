
"use client";

import { Carousel } from "flowbite-react";
import img1 from '../assets/HeroSection/Image/HeroSection1.jpg'

export default function HeroSectionHome2() {
  return (
    <div className="h-56  lg:h-screen  mt-11">
      <Carousel>
       <img src={img1}/>
       <img src={img1}/>
       <img src={img1}/>
       <img src={img1}/>
       <img src={img1}/>

      

      </Carousel>
    </div>
  );
}
