import React, { ReactNode } from 'react'

export default function MaxWidth({children, className}:{children: ReactNode, className?: string}) {
  return (
    <div className={`max-w-[1280px] ${className}`}>{children}</div>
  )
}
