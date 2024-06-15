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


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
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
                <FiCodesandbox size={36} strokeWidth={1} />


                <NavigationMenu  >


                    <NavigationMenuList className='flex gap-8 text-[13px] font-medium '>

                        <NavigationMenuItem >
                            <NavigationMenuTrigger className='text-[13px]'>Projects</NavigationMenuTrigger>
                            <NavigationMenuContent className='relative'  >
                                <div className="absolute h-full w-full top-0 left-0 "></div>
                                <ul className="grid gap-2 [&>*]:rounded-none p-2 md:w-[400px] lg:w-[500px] relative z-50 ">

                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>

                                    <ListButton href="/contact" title="Request commission" className=' '  >
                                        <p className='text-xs'>Can't find what you're looking for? We'll see how we can help!</p>
                                    </ListButton>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-[13px]'>Services</NavigationMenuTrigger>
                            <NavigationMenuContent  >
                                <ul className="grid gap-2 [&>*]:rounded-none p-2 md:w-[400px] lg:w-[500px] ">

                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>

                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to="/docs" >
                                Blog
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/docs"    >
                                Blog
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>

                    {/* < NavigationMenuViewport className=' -left-1/2 w-20'  /> */}

                </NavigationMenu>




                <Button variant={'primary'} className='rounded-lg'>Get in touch</Button>


            </section>

            <section className="max-w-6xl container flex sm:hidden justify-between items-center py-2.5">
                <FiCodesandbox size={36} strokeWidth={1} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open</Button>
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