import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { LiaSkullSolid } from "react-icons/lia";
import { IoSkullOutline } from "react-icons/io5";
import { TbDna2 } from "react-icons/tb";
import { IoMapOutline } from "react-icons/io5";
import { PiSwapLight } from "react-icons/pi";
import DNA1 from '@/assets/home/dna1.jpg'
import DNA2 from '@/assets/home/dna2.png'
import DNA3 from '@/assets/home/dna3.png'
import DNA4 from '@/assets/home/dna4.png'

import Reflection1 from '@/assets/home/reflection1.png'
import Reflection2 from '@/assets/home/reflection2.png'
import Reflection3 from '@/assets/home/reflection3.png'

import Reconstruction1 from '@/assets/home/reconstruction1.png'
import Reconstruction2 from '@/assets/home/reconstruction2.png'
import Reconstruction3 from '@/assets/home/reconstruction3.png'
import Reconstruction4 from '@/assets/home/reconstruction4.png'
import Reconstruction5 from '@/assets/home/reconstruction5.png'
import Hero from './components/hero';
import Partners from './components/partners';
import Trusted from './components/trusted';
import FAQ from './components/faq';
import Testimonials from './components/testimonials';


const tabs = [
  {
    label: 'InterpretDNA'
  }
]

type ToggleT = 'dna' | 'reflection' | 'reconstructions' | 'cartography'

const Home = () => {
  const [selectedToggle, setSelectedToggle] = useState<ToggleT>('dna')


  return (
    <>
      <Hero />
      <Partners />
      <Trusted />

      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home