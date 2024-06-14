import React from 'react'

type Props = {
    content: string
    author: string
    authorDescription: string
}

const TestimonialCard = ({ content, author, authorDescription }: Props) => {
    return (
        <div className='testimonial-card relative  bg-gradient-to-b  from-zinc-900/45 to-80% to-transparent  w-full max-w-[700px] !rounded-2xl '>
            <div className=" px-8 py-6 ">
                <p className="text-muted-foreground text-sm">{`"${content}"`}</p>

                <p className="text-sm mt-6">{author}</p>
                <p className="text-sm text-muted-foreground">{authorDescription}</p>
            </div>
        </div>
    )
}

export default TestimonialCard