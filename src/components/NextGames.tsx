import React from 'react'
import MatchCard from './MatchCard'

export default function NextGames({title}: {title:string}) {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='bg-black m-4 mb-0 flex md:w-1/5 justify-center text-mainGreen p-2 rounded-t-lg text-center font-semibold text-lg'>{title}</h1>
            <div className='grid  p-2 bg-black/[0.05] w-3/4 mx-auto rounded-lg m-2 mt-0 justify-center grid-cols-[repeat(auto-fill,minmax(230px,1fr))] lg:grid-cols-3 gap-6'>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>
        </div>
    )
}
