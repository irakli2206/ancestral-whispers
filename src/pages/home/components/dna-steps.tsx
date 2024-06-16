import React from 'react'
import DNAServices from '@/assets/home/dna-services.jpg'
import { Button } from '@/components/ui/button'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const DNASteps = () => {
    return (
        <div className="flex flex-col">
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                <section className=" h-full flex flex-col gap-2 px-4 py-2 flex-1">
                    {/* <img src={DNAServices} className='h-40 w-auto object-contain object-left invert grayscale' /> */}
                    <h1 className='font-medium '>Submit your DNA results</h1>
                    <p className='text-muted-foreground text-sm'>To proceed, please provide DNA test results from companies like 23andMe, FamilyTreeDNA, or similar services.</p>
                </section>

                <section className="hero-step relative h-full flex flex-col gap-2 px-4 py-2 flex-1">
                    <h1 className='font-medium '>Select your desired subservices</h1>
                    <p className='text-muted-foreground text-sm'>We offer a variety of DNA research services. Choose the ones that best suit your needs.</p>
                </section>

                <section className="hero-step relative h-full flex flex-col gap-2 px-4 py-2 flex-1">
                    <h1 className='font-medium '>Receive your results</h1>
                    <p className='text-muted-foreground text-sm'>Your results will be delivered within 7 business days.</p>
                </section>
            </div>
            <Button variant={'link'} className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ml-auto mt-8' asChild><Link to='#'>
                Learn about DNA Research <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' />
            </Link></Button>
        </div>
    )
}

export default DNASteps