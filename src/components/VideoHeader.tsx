import Link from 'next/link'
import React from 'react'

export default function VideoHeader() {
    return (
        <header className="w-full max-h-[500px] relative bg-black">
            <div className="absolute z-10 text-center w-full h-full text-white flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl md:text-4xl">Torneo de FIFA 2025</h1>
                <h2 className="font-medium text-sm md:text-lg">Villas del encanto 1</h2>
                <Link href={"/inscripcion"} className="bg-mainGreen text-sm md:text-base hover:scale-110 cursor-pointer hover:bg-white transition-all duration-200 text-black p-2 rounded-full my-4 font-medium">Inscribirse</Link>
            </div>
            <video className="opacity-30 w-full max-h-[500px] object-cover" width={1280} height={720} muted autoPlay={true} loop>
                <source src="/trailer.mp4" type="video/mp4" />
            </video>
        </header>
    )
}
