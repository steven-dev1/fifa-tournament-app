import React from 'react'

export default function MatchCard() {
  return (
    <article className={`flex m-2 flex-col items-center justify-center last:justify-self-center`}>
      <div className='text-xs bg-mainGreen text-black py-1 px-2 rounded-t-lg font-medium'>14 Dic - 2024 | 4:00 p.m</div>
      <div className='bg-white flex flex-col items-center text-black rounded-lg'>
        <div className='flex items-center justify-between gap-8 rounded-lg p-3'>
          <div className='font-bold md:text-lg truncate max-w-[100px]'>Team 1</div>
          <div>vs</div>
          <div className='font-bold md:text-lg truncate max-w-[100px]'>Team 2</div>
        </div>
      </div>
      <div className='bg-mainGreen py-1 px-2 text-xs font-semibold rounded-b-lg'>Fecha 1</div>
    </article>
  )
}
