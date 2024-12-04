'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MaxWidth from './MaxWidth'
import { LuAlignJustify, LuX } from "react-icons/lu";
import { navlinks } from '@/utils/helpers';
import { NavLinks } from '@/types/types';

export default function MobileNavBar() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='w-full md:hidden bg-black p-5 flex justify-center items-center'>
            <MaxWidth className='flex items-center justify-between w-full'>
                <Link href={"/"}>
                    <Image src={"/logo-fc2025.webp"} height={50} width={100} alt={'Logo FC 2025'} title='Logo del FC 2025' />
                </Link>
                <button onClick={() => setOpen(!open)} className='p-2 z-50'>
                    {open ? <LuX color='#fff' size={26} strokeWidth={3} /> : <LuAlignJustify color='#fff' size={26} />}
                </button>
                <nav className={`fixed flex items-center justify-center font-semibold gap-4 flex-col top-0 right-0 h-screen w-[50%] bg-black ${open ? "scale-x-100" : "scale-x-0"} transition-all duration-150 origin-right`}>
                    {navlinks.map((link: NavLinks) => {
                        return (
                            <Link className='text-white' href={link.route} key={link.route}>{link.label}</Link>
                        )
                    })}
                </nav>
            </MaxWidth>
        </div>
    )
}
