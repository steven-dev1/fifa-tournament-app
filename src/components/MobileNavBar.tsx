'use client'
import React, { useState } from 'react'
import MaxWidth from './MaxWidth'
import { LuAlignJustify, LuX } from "react-icons/lu";
import LinksList from './LinksList'
import LogoFC from './LogoFC'
import { usePathname } from 'next/navigation';

export default function MobileNavBar() {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()
    return (
        <div className='w-full relative z-50 md:hidden bg-black p-5 flex justify-center items-center'>
            <MaxWidth className='flex items-center justify-between w-full'>
                <LogoFC />
                <button onClick={() => setOpen(!open)} className='p-2 z-50'>
                    {open ? <LuX color='#fff' size={26} strokeWidth={3} /> : <LuAlignJustify color='#fff' size={26} />}
                </button>
                <nav className={`fixed flex items-center justify-center font-semibold gap-4 flex-col top-0 right-0 h-screen w-[50%] bg-black ${open ? "scale-x-100" : "scale-x-0"} transition-all duration-150 origin-right`}>
                    <LinksList pathname={pathname}/>
                </nav>
            </MaxWidth>
        </div>
    )
}
