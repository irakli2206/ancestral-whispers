import { Badge } from '@/components/ui/badge'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: 'What are some common applications of cranial reconstructions, maps, and DNA research?',
        answer: 'Common applications of cranial reconstructions, maps, and DNA research in genealogy and ancestral research include understanding human migration patterns, reconstructing ancestral faces, tracing genetic ancestry, uncovering genealogical and familial connections, identifying ancestral health traits, and informing cultural and historical research. These methods provide insights into the physical characteristics, genetic heritage, and historical context of past populations, aiding in understanding ancestral origins and genealogical connections.'
    },
    {
        question: 'How long does it take to make a map or reconstruction?',
        answer: 'The completion time for a map or reconstruction varies based on the subject and scale of the project, typically ranging from 3 to 18 work days.'
    },
    {
        question: 'Are there any limitations or potential biases in the cranial reconstructions?',
        answer: 'The accuracy of a cranial reconstruction depends on the available data, including DNA, cranial measurements, and archaeological factors. More data allows for reduced biases and estimation errors in creating the reconstruction.'
    },
    {
        question: 'How accurate are cranial reconstructions in determining ancestral origins?',
        answer: `Cranial reconstructions can provide valuable insights into ancestral origins, but accuracy may vary depending on the available data, methodology, and limitations. It's important to interpret reconstructions in conjunction with other evidence for a comprehensive understanding.`
    },
]

const FAQ = () => {
    return (
        <section className='container max-w-6xl mx-auto flex flex-col gap-12 items-center py-24 px-6 relative '>
            <header className="flex flex-col w-full items-start">
                <Badge variant={'outline'} className='mb-1 w-fit bg-gradient-to-b from-transparent to-zinc-800/70 rounded-full '>FAQ</Badge>
                <h1 className='mb-8 text-end text-5xl md:text-6xl [&>*]:font-display [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Things you may ask</span></h1>
            </header>

            <div className="flex flex-col w-full">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map(item => {
                        return <AccordionItem value={item.answer}>
                            <AccordionTrigger className='text-xl'>{item.question}</AccordionTrigger>
                            <AccordionContent className='text-lg text-muted-foreground'>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    })}
 
                </Accordion>
            </div>

        </section>
    )
}

export default FAQ