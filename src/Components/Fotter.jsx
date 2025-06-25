import React from 'react'
import Logo from '../../src/assets/logo/white.png'

export default function Fotter() {
    return (
        <footer className='out jcenter icenter bg-blackbg'>
            <section className='in between icenter p-section'>
                <img src={Logo} className='w-[100px]' alt="Our logo" />
            </section>
        </footer>
    )
}
