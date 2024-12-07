import Link from 'next/link';
import React, { ReactNode } from 'react'

interface MainButtonProps {
    children: ReactNode;
    handle?: () => void;
    href?: string;
    hover: "black" | "white"
}

export default function MainButton({ children, handle, href }: MainButtonProps) {
    const isButton = !href
    return (
        isButton ?
            (
                <button onClick={handle} type="submit" className="bg-mainGreen transition-all duration-200 hover:bg-black hover:text-mainGreen text-sm text-black font-semibold p-2 rounded-full">
                    {children}
                </button>
            )
            :
            (
                <Link href={href} type="submit" className="bg-mainGreen transition-all duration-200 hover:bg-black hover:text-mainGreen text-sm text-black font-semibold p-2 rounded-full">
                    {children}
                </Link>
            )
    )
}
