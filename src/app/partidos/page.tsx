import MaxWidth from '@/components/MaxWidth'
import NextGames from '@/components/NextGames'
import React from 'react'

export default function page() {
  return (
    <MaxWidth>
      <NextGames title='Próximos partidos' />
      <NextGames title='Resultados' />
    </MaxWidth>
  )
}
