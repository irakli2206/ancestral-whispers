import React from 'react'
import Nechvaloda from '@/assets/home/nechvaloda.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import classNames from 'classnames'
import { Badge } from '@/components/ui/badge'

const stats = [
    { id: 1, name: 'Loyal customers', value: '150+' },
    { id: 2, name: 'Completed orders', value: '300+' },
    { id: 3, name: 'Twitter followers', value: '13,000+' },
]

const Trusted = () => {
    return (
        <section className='container max-w-6xl mx-auto flex flex-col gap-12 items-center py-36 px-6 relative min-h-screen '>
            <header className="flex justify-between gap-8">
                <div className="flex flex-col  flex-1">
                    <Badge variant={'outline'} className='mb-2 w-fit bg-gradient-to-b from-transparent to-zinc-800/70 rounded-full '>Quality Approved</Badge>
                    <h1 className='mb-8 self-start text-5xl [&>*]:font-display [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Trusted by experts</span></h1>
                    <p className='text-muted-foreground text-lg '>Trusted by experts like Aleksey Nechvaloda and Martin Furholt, our work is renowned for its precision and reliability. Leading professionals across various fields rely on our expertise for accurate and insightful results. <br /><br /> Our steadfast dedication to excellence drives us to uphold the most stringent standards in every project we undertake. This unwavering commitment has established us as a trusted partner among global industry leaders, cementing our reputation for excellence and reliability.</p>
                </div>
                <div className=" flex-col gap-2 hidden lg:flex flex-1">
                    <img
                        className=' grayscale rounded-md'
                        src={Nechvaloda}
                    />
                    <p className='text-muted-foreground text-center'>Aleksey Nechvaloda in a conference demonstrating a reconstruction created by Ancestral Whispers.   <Link to='/blog/filipovka' className='text-white'>Read more</Link> </p>
                </div>
            </header>

            <footer className="w-full py-4 md:py-16">
                <div className=" ">
                    <dl className="flex flex-col gap-8 md:flex-row justify-between">
                        {stats.map((stat, i) => (
                            <div key={stat.id} className={classNames(" flex relative md:px-10 flex-col gap-y-2", {
                                'hero-step': i !== 0
                            })}>
                                <dt className="[text-shadow:0_2px_12px_rgba(174,207,242,.44)]  text-4xl font-display tracking-tight  sm:text-5xl">
                                    {stat.value}
                                </dt>
                                <dd className="text-base text-muted-foreground">{stat.name}</dd>

                            </div>
                        ))}
                    </dl>
                </div>
            </footer>
        </section>
    )
}

export default Trusted