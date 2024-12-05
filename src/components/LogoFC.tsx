import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LogoFC() {
    return (
        <Link href={"/"}>
            <Image src={"/logo-fc2025.webp"} height={50} width={100} alt={'Logo FC 2025'} title='Logo del FC 2025' />
        </Link>
    )
}
