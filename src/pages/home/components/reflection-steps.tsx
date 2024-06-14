import React from 'react'
import Reflection1 from '@/assets/home/reflection1.png'
import Reflection2 from '@/assets/home/reflection2.png'
import Reflection3 from '@/assets/home/reflection3.png'
import { Link } from 'react-router-dom'

const ReflectionSteps = () => {
    return (

        <div className='flex '>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                <img src={Reflection1} className='h-64 w-64' />
                <h1 className='font-medium text-lg'>Choose an image</h1>
                <p className='text-muted-foreground'>Choose an image that you want to reconstruct as an ancient human.</p>
            </section>

            <section className=" h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                <img src={Reflection2} className='h-60 w-60 mb-4' />
                <h1 className='font-medium text-lg'>Choose an ancient</h1>
                <p className='text-muted-foreground'>Browse our <Link to='/reconstructions' className='underline text-primary'>collection of reconstructions</Link> and select someone.</p>
            </section>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                <img src={Reflection3} className='h-64 w-64' />
                <h1 className='font-medium text-lg'>Ancestral reflection complete</h1>
                <p className='text-muted-foreground'>You can now see how the modern individual would look as a member of an ancient tribe</p>
            </section>
        </div>
    )
}

export default ReflectionSteps