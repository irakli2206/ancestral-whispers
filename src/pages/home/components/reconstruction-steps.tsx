import React from 'react'
import Skull from '@/assets/home/skull.png'
import Reflection2 from '@/assets/home/reflection2.png'
import Reflection3 from '@/assets/home/reflection3.png'
import { Link } from 'react-router-dom'

const ReconstructionSteps = () => {
    return (
        <div className='flex '>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                {/* <img src={Skull} className='h-48 w-auto object-contain object-left' /> */}
                <h1 className='font-medium text-lg'>Choose the desired skull</h1>
                <p className='text-muted-foreground'>Send us images of the skull you want to reconstruct. If you do not have any particular skull in mind, we can assist you with the selection process.</p>
            </section>

            <section className=" h-full  flex flex-col gap-2 px-4 py-2  flex-1">
                {/* <img src={Reflection2} className='h-48 w-auto object-contain object-left' /> */}
                <h1 className='font-medium text-lg'>R</h1>
                <p className='text-muted-foreground'>It takes up to 7 days to reconstruct a skull. The reconstruction process is based on multiple peer-reviewed scientific papers. <Link to='/blog/methodology' className='underline text-primary'>Read more about the process</Link></p>
            </section>
 
        </div>
    )
}

export default ReconstructionSteps