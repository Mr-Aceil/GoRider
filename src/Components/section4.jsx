import React from 'react'
import Tag from './tags'
import Button from './Button'
import Iphone from '../../src/assets/HomeImages/section4/iphone.png'

export default function section4() {
    return (
        <section className='out icenter jcenter bg-[url("../../src/assets/HomeImages/section4/sec4bg.png")] bg-fixed bg-cover bg-no-repeat bg-center'>
            <div className='in flex-col p-section icenter jcenter gap-6'>
                <Tag name='Our App' icons=''/>

                <div className='flex items-stretch bg-blackbg icenter max1-6k p-6 gap-4 rounded-[20px] 
                                max-[761px]:flex-col 
                                max-[761px]:p-2'>
                    <div className='flex flex-col gap-4 grow-[1]'>
                        <h3 className='text-h1 text-textmain font-bold max-[1200px]:text-h2'>Your Trusted Partners for Local <span className='bg-backgroundp'>Delivery Needs.</span></h3>
                        <p className='text-h3 text-textmain'>Experience the best in delivery services.</p>
                        <Button others='w-fit'/>
                    </div>

                    <img src={Iphone} className='w-[500px] 
                                                max-[1200px]:w-full
                                                max-[1200px]:max-w-[300px]' alt="" />
                </div>
            </div>
        </section>
    )
}
