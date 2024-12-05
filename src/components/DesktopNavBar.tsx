'use client'
import React from 'react'
import MaxWidth from './MaxWidth'
import LogoFC from './LogoFC'
import LinksList from './LinksList'
import { usePathname } from 'next/navigation'

export default function DesktopNavBar() {
    const pathname = usePathname()
    return (
        <div className='w-full md:flex bg-black p-5 hidden justify-center items-center'>
            <MaxWidth className='flex justify-between items-center'>
                <LogoFC />
                <nav className='flex items-center justify-center gap-4'>
                    <LinksList pathname={pathname}/>
                </nav>
            </MaxWidth>
        </div>
    )
}
