import React from 'react'

const Banner = () => {
    return (
        <div className="relative  bg-background-black border-b z-[9999] px-6 py-1 sm:px-3.5 ">

            <div className="flex flex-wrap w-full justify-center items-center ">
                <p className="text-xs leading-6 text-primary flex items-center">
                    <strong className="font-semibold">Site is being rebuilt</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 h-0.5 w-0.5 fill-current hidden md:inline" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <p className="hidden md:block">The website's interface is receiving a massive update, bugs are a possibility</p>
                </p>

            </div>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                </button>
            </div>
        </div>
    )
}

export default Banner