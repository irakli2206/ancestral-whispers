import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoscroll from "embla-carousel-auto-scroll"
import TestimonialCard from './testimonial-card'
import { Badge } from '@/components/ui/badge'


type TestimonialT = {
    content: string
    author: string
    authorDescription: string
}

const testimonialData: TestimonialT[] = [
    {
        content: 'I am DELIGHTED by your work on the new version of your reconstruction of the appearance of the priestess from Filippovka! I am very glad that our cooperation was successful and ended with such wonderful digital reconstructions of the Sarmatians of Filippovka I. I express hope that this cooperation of ours will not be the last!',
        author: 'Aleksey Nechvaloda',
        authorDescription: 'Anthropologist & Reconstruction Artist'
    },
    {
        content: "I was amazed by the depth of research and insights provided by Ancestral Whispers. Their expertise in anthropology and history shone through, and I gained a whole new perspective on my family's ancestry. Highly recommended!",
        author: 'Balaji',
        authorDescription: 'Ordered AASI reconstruction'
    },
    {
        content: "Ancestral Whispers enabled me to uncover all the intriguing and significant details about my heritage that conventional DNA testers usually omit. AW's services are much more personalized and comprehensive.",
        author: 'Nelli',
        authorDescription: 'Ordered DNA research'
    },
    {
        content: "Ancestral Whispers' maps were a godsend for my research! They were clear, colorful, and packed with information. I couldn't get enough of them and kept coming back for more. Highly recommended!",
        author: 'Stas',
        authorDescription: 'Ordered Yamnaya ancestry map'
    },
    {
        content: "I was a bit surprised by the various Western Hunter-Gatherer reconstructions I saw online, so I wanted to see how AW's version of a WHG would look. I am no anthropologist, but this seems very realistic and accurate.",
        author: 'Craig',
        authorDescription: 'Ordered WHG reconsruction'
    },
    {
        content: "I was a bit surprised by the various Western Hunter-Gatherer reconstructions I saw online, so I wanted to see how AW's version of a WHG would look. I am no anthropologist, but this seems very realistic and accurate.",
        author: 'Paulu',
        authorDescription: 'Ordered WHG reconsruction'
    },
]

const Testimonials = () => {
    const plugin = useRef(
        Autoscroll({ speed: 0.5 })
    )


    return (
        <section className='overflow-visible flex flex-col gap-12 items-center py-24 px-6 relative  '>
            <header className="container max-w-6xl w-full">
                <div className="flex flex-col w-full items-end flex-1 ">
                    <Badge variant={'outline'} className='mb-1 w-fit bg-gradient-to-b from-transparent to-zinc-800/70 rounded-full '>Testimonials</Badge>
                    <h1 className='mb-4 self-end text-6xl [&>*]:font-display  [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Beyond expectations</span></h1>
                    <p className='text-muted-foreground text-md '>We wouldn't be here without customer feedback. Here's what a few of them have to say.</p>
                </div>
            </header>

            <Carousel
                plugins={[plugin.current]}
                className="w-full carousel"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={(e) => plugin.current.play(0)}
            >
                <CarouselContent>
                    {testimonialData.map((testimonial, index) => (
                        <CarouselItem key={index} className='basis-1/3  p-1  flex justify-center'>
                            <div className="pl-4 w-full">
                                <TestimonialCard {...testimonial} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default Testimonials