import React, { useEffect, useState } from 'react'
import { FiCodesandbox } from "react-icons/fi";
import classnames from 'classnames'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { CgArrowLongRight } from "react-icons/cg";
import { GoChevronRight } from "react-icons/go";

type NavbarT = NavbarItemT[]

type NavbarItemT = {
    title: string;
    path?: string;
    children?: NavbarChildrenT[]
}

type NavbarChildrenT = {
    title: string;
    path: string;
    description: string
    isButton?: boolean
}

const NAVBAR_ITEMS: NavbarT = [
    {
        title: 'Projects',
        children: [
            {
                title: 'Reconstructions',
                description: 'A collection of reconstructions by AW',
                path: '/reconstructions'
            },
            {
                title: 'Maps',
                description: 'A collection of maps by AW',
                path: '/maps'
            },
            {
                title: 'Y-DNA Atlas',
                description: 'Map of ethnicities by Y-DNA distribution',
                path: '/ydna-atlas'
            },
            {
                title: 'Request commission',
                description: "Can't find what you're looking for? We'll see how we can help",
                path: '/contact',
                isButton: true
            },
        ]
    },
    {
        title: 'Services',
        children: [
            {
                title: 'DNA Research',
                description: 'A collection of reconstructions by AW',
                path: '/reconstructions'
            },
            {
                title: 'Reflection',
                description: 'A collection of maps by AW',
                path: '/maps'
            },
            {
                title: 'Request commission',
                description: "Can't find what you're looking for? We'll see how we can help",
                path: '/contact',
                isButton: true
            },
        ]
    },
    {
        title: 'Blog',
        path: '/blog'
    }
]




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
        <nav className={classnames('flex justify-center items-center  transition sticky top-0 z-[9999] ', {
            'border-b bg-black/30': scrolled
        })}>
            {/* Have to add separate blur div cause can't nest blurs in Chrome */}
            <div className="absolute h-full w-full backdrop-blur-sm z-10"></div>

            <section className="max-w-6xl container hidden sm:flex justify-between items-center py-2.5 z-20">

                <Link to='/'>
                    <FiCodesandbox size={36} strokeWidth={1} />
                </Link>


                <NavigationMenu  >
                    <NavigationMenuList className='flex gap-8 text-[13px] font-medium '>
                        {NAVBAR_ITEMS.map(({ title, children, path }) =>
                            <NavigationMenuItem >
                                {children ?
                                    <>
                                        <NavigationMenuTrigger className='text-[13px]'>{title}</NavigationMenuTrigger>
                                        <NavigationMenuContent className='relative'  >
                                            {/* <div className="absolute h-full w-full top-0 left-0 "></div> */}
                                            <ul className="grid gap-2 [&>*]:rounded-none p-2 md:w-[400px] lg:w-[500px] relative z-50 ">
                                                {children.map(({ description, path, title, isButton }) =>
                                                    <>
                                                        {isButton ?
                                                            <ListButton href={path} title={title} className=' '  >
                                                                <p className='text-xs'>{description}</p>
                                                            </ListButton>
                                                            :
                                                            <ListItem href={path} title={title}>
                                                                {description}
                                                            </ListItem>
                                                        }
                                                    </>

                                                )}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                    :
                                    <Link to={path!}>
                                        {title}
                                    </Link>
                                }
                            </NavigationMenuItem>
                        )}


                    </NavigationMenuList>

                    {/* < NavigationMenuViewport className=' -left-1/2 w-20'  /> */}

                </NavigationMenu>




                <Button variant={'primary'} className='rounded-lg'>Get in touch</Button>


            </section>

            <section className="max-w-6xl container flex sm:hidden justify-between items-center py-2.5 z-20">
                <FiCodesandbox size={36} strokeWidth={1} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Menu</Button>
                    </SheetTrigger>
                    <SheetContent className='z-[9999] bg-background-black'>

                        <div className="flex flex-col gap-6 my-8 ">
                            <Link to='reconstructions'>Reconstructions</Link>
                            <Link to='reconstructions'>Maps</Link>
                            <Link to='reconstructions'>Y-DNA Atlas</Link>
                            <Link to='reconstructions'>Reconstructions</Link>
                        </div>
                        <SheetFooter>
                            <Button variant='primary'>Get in touch</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </section>

        </nav>
    )
}

export default Navbar


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: JSX.Element }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group flex justify-between items-center select-none  rounded-md p-3 leading-none no-underline outline-none transition  focus:bg-accent/50 ",
                        className
                    )}
                    {...props}
                >
                    <div className='flex flex-col space-y-1 transition '>
                        <div className="flex gap-1.5 items-center text-sm font-medium ">
                            <p className='text-primary/80 group-hover:text-primary'>{title}</p>
                            <GoChevronRight size={12} className='transition  opacity-0 group-hover:!opacity-100 group-hover:translate-x-1' />
                        </div>
                        <p className="  text-xs  text-muted-foreground/80 group-hover:text-muted-foreground ">
                            {children}
                        </p>
                    </div>

                    {props.icon}

                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const ListButton = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: JSX.Element }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group bg-zinc-900 hover:bg-zinc-900/85 border flex justify-between items-center select-none  rounded-md p-3 leading-none no-underline outline-none transition-colors   hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className='flex flex-col space-y-1'>
                        <div className="flex gap-1.5 items-end text-sm font-medium leading-none text-primary/80 group-hover:text-primary">
                            <p>{title}</p>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/80 group-hover:text-muted-foreground">
                            {children}
                        </p>
                    </div>

                    {props.icon}

                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListButton"