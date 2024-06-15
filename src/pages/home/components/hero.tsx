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
import DNASteps from './dna-steps';
import ReflectionSteps from './reflection-steps';
import ReconstructionSteps from './reconstruction-steps';
import CartographySteps from './cartography-steps';
import { RisingStars } from '@/components/stars';


type ToggleT = 'dna' | 'reflection' | 'reconstructions' | 'cartography'

//TODO: ტაბები რომ მაქვს მანდ განხორციელების საფეხურებზე გადავაკეთო ახლა უბრალოდ სურათებს რომ ვაჩვენებ
const Hero = () => {
    const [selectedToggle, setSelectedToggle] = useState<ToggleT>('dna')

    return (
        <>
            <div className="w-full h-[500px] absolute overflow-hidden">
                <RisingStars numberOfStars={200} opacity='low' />
            </div>
            <section className='container max-w-6xl mx-auto flex flex-col gap-12 items-center py-20 px-6 relative min-h-screen '>

                <header className='max-w-3xl text-center flex items-center flex-col gap-4'>
                    <h1 className=' text-7xl [&>*]:font-display  [text-shadow:0_2px_16px_rgba(174,207,242,.44)]'><span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-500 from-10% to-55% to-white'>Uncover your past with</span> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Ancestral Whispers</span></h1>
                    <p className='text-muted-foreground text-lg '>Ancestral Whispers provides universal and all-encompassing DNA research. Explore your heritage using DNA, maps, charts, historical data and more.</p>
                </header>

                <main className="flex gap-4">
                    <Button variant={'primary'} className='rounded-lg px-10 ' >Get In Touch </Button>
                    <Button variant={'link'} size='lg' className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ' >Explore <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' /></Button>
                </main>

                <footer className='mt-10 relative '>
                    <header className="z-20 relative ">
                        <ToggleGroup value={selectedToggle} onValueChange={(e) => setSelectedToggle(e as ToggleT)} type="single" className='items-start gap-0 lg:gap-4' >
                            <ToggleGroupItem value="dna" aria-label="Toggle bold" className='flex flex-col  gap-2 !text-muted-foreground group data-[state="on"]:!text-primary h-auto data-[state=on]:!bg-transparent hover:bg-transparent'>
                                <div className="rounded-sm p-2 border   group-data-[state=on]:!border-white/20 bg-gradient-to-t from-white/10 group-data-[state=on]:!from-white/20 to-black">
                                    <TbDna2 size={20} />
                                </div>
                                <p>DNA Research</p>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="reflection" aria-label="Toggle bold" className='flex flex-col  gap-2 !text-muted-foreground group data-[state="on"]:!text-primary h-auto data-[state=on]:!bg-transparent hover:bg-transparent'>
                                <div className="rounded-sm p-2 border   group-data-[state=on]:!border-white/20 bg-gradient-to-t from-white/10 group-data-[state=on]:!from-white/20 to-black">
                                    <PiSwapLight size={20} />
                                </div>
                                <p>Reflection</p>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="reconstructions" aria-label="Toggle bold" className='flex flex-col  gap-2 !text-muted-foreground group data-[state="on"]:!text-primary h-auto data-[state=on]:!bg-transparent hover:bg-transparent'>
                                <div className="rounded-sm p-2 border   group-data-[state=on]:!border-white/20 bg-gradient-to-t from-white/10 group-data-[state=on]:!from-white/20 to-black">
                                    <LiaSkullSolid size={20} />
                                </div>
                                <p>Reconstructions</p>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="cartography" aria-label="Toggle bold" className='flex flex-col  gap-2 !text-muted-foreground group data-[state="on"]:!text-primary h-auto data-[state=on]:!bg-transparent hover:bg-transparent'>
                                <div className="rounded-sm p-2 border   group-data-[state=on]:!border-white/20 bg-gradient-to-t from-white/10 group-data-[state=on]:!from-white/20 to-black">
                                    <IoMapOutline size={20} />
                                </div>
                                <p>Cartography</p>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </header>

                    <footer className='h-full mt-16 flex flex-col'>
                        {selectedToggle === 'dna' && <DNASteps />}
                        {selectedToggle === 'reflection' && <ReflectionSteps />}
                        {selectedToggle === 'reconstructions' && <ReconstructionSteps />}
                        {selectedToggle === 'cartography' && <CartographySteps />}

                    </footer>
                </footer>

            </section>




            <img alt="Light ray background" decoding="async" data-nimg="1" className="pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto hidden h-full w-full select-none md:block"
                src={"https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbghero.png&w=1080&q=75"}
            />
        </>
    )
}

export default Hero