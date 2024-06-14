import React from 'react'
import DNAServices from '@/assets/home/dna-services.jpg'

const DNASteps = () => {
    return (
        <div className='flex '>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                {/* <img src={DNAServices} className='h-40 w-auto object-contain object-left invert grayscale' /> */}
                <h1 className='font-medium text-lg'>Send us your DNA results</h1>
                <p className='text-muted-foreground'>You need to have performed a DNA test with a company such as 23andMe, FamilyTreeDNA or any other.</p>
            </section>

            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                <h1 className='font-medium text-lg'>Choose the appropriate subservices</h1>
                <p className='text-muted-foreground'>We perform multiple types of DNA research, you can choose whichever you desire.</p>
            </section>
            <section className=" h-full  flex flex-col gap-2 px-4 py-2 flex-1">
                <h1 className='font-medium text-lg'>Receive your results</h1>
                <p className='text-muted-foreground'>We take up to 7 working days to deliver you results. </p>
            </section>
        </div>
    )
}

export default DNASteps