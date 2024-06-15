import { Meteors } from '@/components/meteors'
import { BlinkingStars, FloatingStars, RisingStars } from '@/components/stars'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'framer-motion'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Link } from 'react-router-dom'
import { LiaSkullSolid } from "react-icons/lia";
import { TbDna2 } from "react-icons/tb";
import { IoMapOutline } from "react-icons/io5";
import { PiSwapLight } from "react-icons/pi";


const CTA = () => {


  return (
      <section className='  mx-auto flex flex-col gap-12 items-center justify-center py-12 pb-36 min-h-[700px] px-6 relative overflow-hidden '

      >
        <div className="mask-cta z-30 absolute h-full w-full  top-0 left-0 ">
          <BlinkingStars numberOfStars={200} />
        </div>
        <header className="flex max-w-6xl container flex-col w-full items-center relative z-50">
          <h1 className='mb-4 text-center text-5xl md:text-6xl [&>*]:font-display [text-shadow:0_2px_12px_rgba(174,207,242,.44)]'> <span className='bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 from-10% to-55% to-white' >Let's uncover your heritage together!</span></h1>
          {/* <p className='text-muted-foreground text-md '>Our mission is a relentless journey to uncover and understand the depths of our shared human history.</p> */}

          <div className="flex gap-4 mt-10">
            <Button variant='primary' size='lg' >Get in touch</Button>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className=' ' >
                <Button variant='link' size='lg' >Explore projects</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to='reconstructions'>
                      <LiaSkullSolid className="mr-2 h-4 w-4" />
                      <span>Reconstructions</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to='maps'>
                      <IoMapOutline className="mr-2 h-4 w-4" />
                      <span>Maps</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to='ydna-atlas'>
                      <TbDna2 className="mr-2 h-4 w-4" />
                      <span>Y-DNA Atlas</span>
                    </Link>
                  </DropdownMenuItem>

                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* <img alt="Light ray background" decoding="async" data-nimg="1" className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 mx-auto  h-full w-full select-none rotate-180"
          src={"https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbghero.png&w=1080&q=75"}
        /> */}
      </section>
   

  )
}

export default CTA