import React, { useEffect, useState } from 'react'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'


type Props = {
    size: "sm" | "md" | "lg" | "xl" | "full" | "xs"
    isOpen: boolean
    onClose: () => void
    data: any
}

const ReconstructionDetails = ({ size, data, onClose, isOpen }: Props) => {
    const [showSkeleton, setShowSkeleton] = useState(true)
    const { age, desc, group, full, period, name } = data || {}
    console.log(data)

    const getFormattedPeriod = () => {
        if (!period) {
            return `Unknown`
        }
        else if (period.length === 1) {
            return `${period[0]} BP`
        }
        else if (period.length === 2) {
            return `${period[0]}-${period[1]} BP`
        }
    }

    console.log(showSkeleton)

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>

            <SheetContent side='left' className='h-full z-[9999] min-w-full md:min-w-[500px] lg:min-w-[800px] pt-12'  >

                <SheetHeader>
                    <div className="relative h-60 w-full">
                        {showSkeleton && <Skeleton className="h-full w-full absolute z-10" />}
                        <img
                            src={full}
                            onLoad={(e) => setShowSkeleton(false)}
                        />
                    </div>

                    <SheetTitle className='text-3xl pt-2'>{name}</SheetTitle>

                </SheetHeader>
                <div className=' '>
                    <div className="mt-6   ">
                        <dl className="divide-y divide-border ">

                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-muted-foreground">Age</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{age ? age.map((age: any) => age) : 'Age'}</dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-muted-foreground">Period</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0"> {getFormattedPeriod()}</dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-muted-foreground">Genetic Group</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">{group}</dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-muted-foreground">About</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {desc}
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>

            </SheetContent>
        </Sheet>

    )
}

export default ReconstructionDetails