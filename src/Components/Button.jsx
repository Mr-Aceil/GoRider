import React from 'react'

export default function Button({name='Button', icon, bg='bg-white', textColor='text-textsecondary', others}) {
    return (
        <button className={`flex items-center justify-center p-button gap-smallgap text-p rounded-full ${textColor} ${bg} ${others}`} >
            {icon} {name}
        </button>
    )
}
