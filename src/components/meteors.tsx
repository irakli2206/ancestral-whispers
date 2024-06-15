import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {
    numberOfMeteors?: number
    distanceBetweenMeteors?: number
    className?: string
}

export const Meteors = ({
    numberOfMeteors = 20,
    distanceBetweenMeteors = 400,
    className,
}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 'some', once: true, margin: '300px' })

    const meteors = new Array(numberOfMeteors || 20).fill(true);
    return (
        <div ref={ref}>
            {isInView ? meteors.map((el, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor-effect opacity-0 absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                        className
                    )}
                    style={{
                        top: 0,
                        left: Math.floor(Math.random() * (distanceBetweenMeteors - -distanceBetweenMeteors) + -distanceBetweenMeteors) + "px",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 2) + 4) + "s",
                    }}
                ></span>
            ))
                :
                null
            }
        </div>
    );
};
