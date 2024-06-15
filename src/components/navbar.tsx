import React, { useEffect, useState } from 'react'
import { FiCodesandbox } from "react-icons/fi";
import { Button } from './ui/button';
import classnames from 'classnames'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={classnames('flex justify-center items-center  transition sticky top-0 z-[9999] backdrop-blur-sm', {
            'border-b bg-black/30': scrolled
        })}>
            <section className="max-w-6xl container flex justify-between items-center py-2.5">
                <FiCodesandbox size={36} strokeWidth={1} />

                <div className="flex gap-8 text-sm font-medium">
                    <a href="#">Works</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                </div>


                <Button variant={'primary'} className='rounded-full'>Get In Touch</Button>
            </section>

        </nav>
    )
}

export default Navbar