import React, { ReactNode } from 'react'

export default function MaxWidth({children, className}:{children: ReactNode, className?: string}) {
  return (
    <section className={`max-w-[1280px] mx-auto w-full ${className}`}>{children}</section>
  )
}
