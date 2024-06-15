import React from 'react'
import { motion } from "framer-motion";

type Props = {
    numberOfStars?: number
    opacity?: 'high' | 'low'
}

export const FloatingStars = ({numberOfStars = 100, opacity = 'high'}: Props) => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(numberOfStars)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [0.5, 0.6, 0],
                    }}
                    transition={{
                        duration: random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block"
                ></motion.span>
            ))}
        </div>
    );
}


export const RisingStars = ({numberOfStars = 100, opacity = 'high'}: Props) => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute top-0 w-full h-full">
            {[...Array(numberOfStars)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `${randomMove()}px`,
                        opacity: opacity === 'high' ? [randomOpacity(), 0] : [randomOpacity()/2, 0],
                        scale: [0.5, 0.6, 0],
                    }}
                    transition={{
                        duration: random() * 10 + 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block"
                ></motion.span>
            ))}
        </div>
    );
}

