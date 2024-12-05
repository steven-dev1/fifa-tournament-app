import { NavLinks } from '@/types/types'
import { navlinks } from '@/utils/helpers'
import Link from 'next/link'
import React from 'react'

export default function LinksList({pathname}: {pathname: string}) {
  return (
    navlinks.map((link: NavLinks) => {
        return (
            <Link className={`text-mainGreen ${pathname === link.route && "text-white"} md:hover:text-white transition-all duration-150 font-medium`} href={link.route} key={link.route}>{link.label}</Link>
        )
    })
  )
}
