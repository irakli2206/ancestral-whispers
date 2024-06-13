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


type ToggleT = 'dna' | 'reflection' | 'reconstructions' | 'cartography'

//TODO: ტაბები რომ მაქვს მანდ განხორციელების საფეხურებზე გადავაკეთო ახლა უბრალოდ სურათებს რომ ვაჩვენებ
const Hero = () => {
    const [selectedToggle, setSelectedToggle] = useState<ToggleT>('dna')

    return (
        <>
            <section className='container max-w-6xl mx-auto flex flex-col gap-12 items-center py-20 px-6 relative min-h-screen'>
                <header className='max-w-2xl text-center flex items-center flex-col gap-4'>
                    <h1 className=' *: text-6xl font-medium'>Uncover your past with Ancestral Whispers</h1>
                    <p className='text-muted-foreground text-lg '>Ancestral Whispers provides universal and all-encompassing DNA research. Explore your heritage using DNA, maps, charts, historical data and more.</p>
                </header>

                <main className="flex gap-4">
                    <Button variant={'outline'} size='lg' className='rounded-full px-10 hover:shadow-inner-button transition hover:bg-background' >Get In Touch </Button>
                    <Button variant={'link'} size='lg' className='rounded-full gap-2 text-muted-foreground hover:text-primary transition !no-underline group ' >Explore <CgArrowLongRight size={20} className='group-hover:text-primary group-hover:translate-x-1 transition-transform ' /></Button>
                </main>

                <footer className='mt-10 container relative '>
                    <main className="z-20 relative ">
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
                            <ToggleGroupItem value="maps" aria-label="Toggle bold" className='flex flex-col  gap-2 !text-muted-foreground group data-[state="on"]:!text-primary h-auto data-[state=on]:!bg-transparent hover:bg-transparent'>
                                <div className="rounded-sm p-2 border   group-data-[state=on]:!border-white/20 bg-gradient-to-t from-white/10 group-data-[state=on]:!from-white/20 to-black">
                                    <IoMapOutline size={20} />
                                </div>
                                <p>Cartography</p>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </main>

                    {selectedToggle === 'dna' &&
                        <div className="absolute w-full top-0 left-0">
                            <img
                                className='hidden lg:block h-32 border border-zinc-900 rounded-lg absolute top-0 z-10'
                                src={DNA1}
                            />

                            <img
                                className=' w-full md:w-2/3 md:left-16 invert-[98%]  border border-zinc-300 rounded-lg absolute top-24 grayscale'
                                src={DNA4}
                            />
                            <img
                                className='hidden md:block h-[250px] border object-contain border-zinc-300 rounded-lg absolute right-0 invert top-48 grayscale'
                                src={DNA2}
                            />

                            {/* <img
                    className='w-[300px] border border-zinc-900 rounded-lg absolute right-0 top-0 grayscale'
                    src={DNA3}
                  /> */}
                        </div>
                    }

                    {selectedToggle === 'reflection' &&
                        <div className="absolute w-full top-0 left-0 flex justify-between">
                            <img
                                className='hidden md:block md:h-[200px] lg:h-[300px] object-contain grayscale rounded-lg absolute top-24 z-10'
                                src={Reflection1}
                            />

                            <img
                                className='hidden md:block md:h-[190px] lg:h-[275px] object-contain left-1/2 -translate-x-1/2 bg-zinc-300 rounded-lg absolute top-[104px] grayscale'
                                src={Reflection2}
                            />
                            <img
                                className='md:h-[200px] lg:h-[300px]  rounded-lg absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 top-24 grayscale'
                                src={Reflection3}
                            />

                            {/* <img
                    className='w-[300px] border border-zinc-900 rounded-lg absolute right-0 top-0 grayscale'
                    src={DNA3}
                  /> */}
                        </div>
                    }

                    {selectedToggle === 'reconstructions' &&
                        <div className="absolute w-full top-0 left-0">
                            <img
                                className=' h-[250px] border object-contain grayscale rounded-lg absolute top-8 z-10 hidden lg:block'
                                src={Reconstruction1}
                            />

                            <img
                                className='hidden sm:block h-[100px] sm:h-[200px] md:h-[250px] border object-contain left-1/2 translate-x-[calc(-50%-220px)]  bg-zinc-300 rounded-lg absolute top-36 grayscale'
                                src={Reconstruction2}
                            />
                            <img
                                className='h-[300px] sm:h-[200px]  md:h-[250px] border  rounded-lg absolute left-1/2 -translate-x-1/2 top-28 sm:top-24 grayscale'
                                src={Reconstruction3}
                            />
                            <img
                                className='hidden sm:block sm:h-[200px]  md:h-[250px] border  rounded-lg absolute left-1/2 translate-x-[calc(-50%+220px)]   top-36 grayscale'
                                src={Reconstruction4}
                            />
                            <img
                                className='  h-[250px] border  rounded-lg absolute right-0 top-8 grayscale hidden lg:block'
                                src={Reconstruction5}
                            />

                            {/* <img
                    className='w-[300px] border border-zinc-900 rounded-lg absolute right-0 top-0 grayscale'
                    src={DNA3}
                  /> */}
                        </div>
                    }


                </footer>

            </section>




            <img alt="Light ray background" decoding="async" data-nimg="1" className="pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto hidden h-full w-full select-none md:block"
                src={"https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbghero.png&w=1080&q=75"}
            />
        </>
    )
}

export default Hero