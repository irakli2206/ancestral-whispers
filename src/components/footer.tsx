import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'

const Footer = () => {
    return (
        <footer className='w-full border-t'>
            <div className='max-w-7xl container  border-zinc-200 py-16 '>
                <div className="flex flex-col gap-6">
                    <p className='text-sm font-semibold'>Ancestral Whispers</p>
                    <ul className='flex flex-col gap-3 [&_a]:text-muted-foreground [&_a:hover]:text-white'>
                        <li>
                            <Button asChild variant='link' className='p-0 font-light h-fit '>
                                <Link to='/developers'>Reconstructions</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant='link' className='p-0 font-light h-fit '>
                                <Link to='/pricing'>Maps</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant='link' className='p-0 font-light h-fit '>
                                <Link to='/faq'>Blog</Link>
                            </Button>
                        </li>
                    </ul>
                </div>

            </div>
            <Separator />
            <div className="py-4 max-w-7xl container  border-zinc-200 flex flex-col sm:flex-row gap-2 justify-between">
                <p className='font-light  text-muted-foreground text-sm text-center sm:text-start'>Copyright © 2024. All rights reserved.</p>

                <div className='flex text-muted-foreground items-center gap-1 text-sm mx-auto sm:mr-0'>
                    <p>Website created by</p>
                    <Button asChild variant='link' className='p-0 h-fit font-bold hover:underline'>
                        <Link target='_blank' to='https://gravette.dev'>Gravette</Link>
                    </Button>
                </div>
            </div>

        </footer>
    )
}

export default Footer