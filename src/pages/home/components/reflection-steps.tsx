import React from 'react'
import Reflection1 from '@/assets/home/reflection1.png'
import Reflection2 from '@/assets/home/reflection2.png'
import Reflection3 from '@/assets/home/reflection3.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CgArrowLongRight } from 'react-icons/cg'
const ReflectionSteps = () => {
    return (
        <div className="flex flex-col">
        <div className='flex  flex-col md:flex-row gap-2 md:gap-0'>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                {/* <img src={Reflection1} className='h-64 w-64' /> */}
                <h1 className='font-medium '>Choose an image</h1>
                <p className='text-muted-foreground text-sm'>Choose an image that you want to reconstruct as an ancient human.</p>
            </section>

            <section className="hero-step relative h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                {/* <img src={Reflection2} className='h-60 w-60 mb-4' /> */}
                <h1 className='font-medium '>Choose an ancient</h1>
                <p className='text-muted-foreground text-sm'>Browse our <Link to='/reconstructions' className='underline text-primary'>collection of reconstructions</Link> and select someone.</p>
            </section>
            <section className="hero-step relative h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                {/* <img src={Reflection3} className='h-64 w-64' /> */}
                <h1 className='font-medium '>Ancestral reflection complete</h1>
                <p className='text-muted-foreground text-sm'>You can now see how the modern individual would look as a member of an ancient tribe</p>
            </section>
        </div>
        <Button variant={'link'} className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ml-auto mt-8' asChild><Link to='#'>
                Learn about Reflection <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' />
            </Link></Button>
        </div>
    )
}

export default ReflectionSteps