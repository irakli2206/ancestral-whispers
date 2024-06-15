import Globe from '@/components/globe'
import { Meteors } from '@/components/meteors';
import { RisingStars } from '@/components/stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import React from 'react'

const About = () => {



    return (
        <section className='container max-w-6xl mx-auto flex flex-col  items-center py-24 pb-12 px-6 relative overflow-hidden'>
            <header className="flex flex-col w-full items-center">
                <Badge variant={'outline'} className='mb-1 w-fit bg-gradient-to-b from-transparent to-zinc-800/70 rounded-full '>About</Badge>
                <h1 className='mb-4 text-center text-6xl [&>*]:font-display [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >We are a diverse team of specialists from all around the world</span></h1>
                <p className='text-muted-foreground text-md '>Our mission is a relentless journey to uncover and understand the depths of our shared human history.</p>

                <Button variant='outline' className='mt-10'>Our values</Button>
            </header>

            <div className="absolute left-20 top-64 ">
                <Meteors distanceBetweenMeteors={800} />
            </div>

            <div className="h-[600px]  w-full relative  overflow-hidden ">
                <main className=" flex w-full items-center justify-center overflow-hidden mask">
                    <Globe />
                </main>
            </div>
            {/* <Globe 
                globeConfig={globeConfig}
                data={sampleArcs}
            /> */}

        </section>
    )
}

export default About