import React from 'react'
import { Button } from '@/components/ui/button'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'


const CartographySteps = () => {
    return (
        <div className="flex flex-col">
            <div className='flex  flex-col md:flex-row gap-2 md:gap-0'>
                <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                    {/* <img src={Skull} className='h-48 w-auto object-contain object-left' /> */}
                    <h1 className='font-medium text-lg'>Describe the concept</h1>
                    <p className='text-muted-foreground'>Tell us what type of map you have in mind, the more detail you provide the better.</p>
                </section>
                <section className="hero-step relative h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                    {/* <img src={Reflection2} className='h-48 w-auto object-contain object-left' /> */}
                    <h1 className='font-medium text-lg'>Data collection</h1>
                    <p className='text-muted-foreground'>Depending on your request, we may need to programmatically collect data and create a database for a GIS map.</p>
                </section>
                <section className="hero-step relative h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                    {/* <img src={Reflection2} className='h-48 w-auto object-contain object-left' /> */}
                    <h1 className='font-medium text-lg'>Visualizing</h1>
                    <p className='text-muted-foreground'>Depending on the project we will use tools such as Inkarnate, PS and QGIS. Length of the project varies greatly.</p>
                </section>

            </div>
            <Button variant={'link'} className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ml-auto mt-8' asChild><Link to='#'>
            Explore projects <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' />
            </Link></Button>
        </div>
    )
}

export default CartographySteps