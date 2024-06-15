import { Meteors } from '@/components/meteors'
import { BlinkingStars, FloatingStars, RisingStars } from '@/components/stars'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'framer-motion'
import React from 'react'

const CTA = () => {


  return (
    <section className='  mx-auto flex flex-col gap-12 items-center justify-center py-12 pb-36 min-h-[700px] px-6 relative overflow-hidden '

    >
      <div className="mask-cta z-30 absolute h-full w-full  top-0 left-0 ">
        <BlinkingStars numberOfStars={200} />
      </div>
      <header className="flex max-w-6xl container flex-col w-full items-center relative z-50">
        <h1 className='mb-4 text-center text-6xl [&>*]:font-display [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Uncover your heritage! Explore our projects today!</span></h1>
        {/* <p className='text-muted-foreground text-md '>Our mission is a relentless journey to uncover and understand the depths of our shared human history.</p> */}

        <div className="flex gap-4">
          <Button variant='outline' size='lg' className='mt-10'>Our values</Button>
          <Button variant='outline' size='lg' className='mt-10'>Our values</Button>

        </div>
      </header>

    </section>
  )
}

export default CTA