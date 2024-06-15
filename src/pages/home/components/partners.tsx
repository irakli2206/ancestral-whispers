import React from 'react'
import Twentythreeandme from '@/assets/home/23andme_logo.png'
import FTDNA from '@/assets/home/ftdna_primary_v_logo_white_web.png'
import QGIS from '@/assets/home/qgis-icon-white128.png'
import Gedmatch from '@/assets/home/gedmatch.png'
import AncestryDNA from '@/assets/home/Ancestry-Logo-PNG1.png'
import Myheritage from '@/assets/home/myheritage.png'

const Partners = () => {
    return (
        <>
            <section className='container max-w-6xl mx-auto flex flex-col gap-12 items-center py-12 pb-24 px-6 relative '>
                <div className="container relative border-t bg-background-black rounded-3xl h-96 flex justify-center py-20">
                    <div className="partners-background-top left-1/2 top-0 w-[300px] max-w-[300px] center pointer-events-none absolute h-px -translate-x-1/2 -translate-y-1/2" ></div>
                    <div className="partners-background -top-0.5 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] center pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"  ></div>
                    <div className=" text-center">
                        <p className="text-muted-foreground text-lg">Compatible with all major DNA test providers. <br /> Working with cutting edge tech.</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 [&>*]:justify-self-center [&>*]:self-center gap-2 mt-12 max-w-3xl mx-auto">
                            <img
                                src={Twentythreeandme}
                                className='h-16 object-contain '
                            />
                            <img
                                src={FTDNA}
                                className='h-12 object-contain'
                            />

                            <img
                                src={Gedmatch}
                                className='h-20 object-cover invert-[98%]'
                            />
                            <img
                                src={AncestryDNA}
                                className='h-24 object-contain brightness-0 invert'
                            />
                            <img
                                src={Myheritage}
                                className='h-24 md:h-32 object-contain brightness-0 invert'
                            />
                            <img
                                src={QGIS}
                                className='h-12 object-contain'
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Partners