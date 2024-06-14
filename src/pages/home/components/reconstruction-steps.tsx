import React from 'react'
import Skull from '@/assets/home/skull.png'
import Reflection2 from '@/assets/home/reflection2.png'
import Reflection3 from '@/assets/home/reflection3.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CgArrowLongRight } from 'react-icons/cg'

const ReconstructionSteps = () => {
    return (
        <div className="flex flex-col">
            <div className='flex '>
                <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                    {/* <img src={Skull} className='h-48 w-auto object-contain object-left' /> */}
                    <h1 className='font-medium text-lg'>Choose the desired skull</h1>
                    <p className='text-muted-foreground'>If you do not have any particular skull in mind, we can assist you with the selection process.</p>
                </section>

                <section className=" h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                    {/* <img src={Reflection2} className='h-48 w-auto object-contain object-left' /> */}
                    <h1 className='font-medium text-lg'>Receive results</h1>
                    <p className='text-muted-foreground'>The reconstruction process is based on multiple peer-reviewed scientific papers. <Link to='/blog/methodology' className='underline text-primary'>Read more about the process</Link></p>
                </section>

            </div>
            <Button variant={'link'} className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ml-auto mt-8' asChild><Link to='#'>
                Explore projects <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' />
            </Link></Button>
        </div>
    )
}

export default ReconstructionSteps