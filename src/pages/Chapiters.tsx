import '../styles/global.css'
import '../styles/reset.css'

import { ChapiterButton } from '../components/ChapiterButton'

export function Chapiters() {
  return (
    <>
      <div className="flex gap-20 w-screen h-screen justify-center bg-gray-50">
          <div className="overflow-y-auto no-scrollbar flex flex-col gap-10 py-10 px-4 items-center absolute w-7/12 h-full">
            <h1 className="text-4xl">Básico</h1>
            <ChapiterButton title="Capitulo 1" description="adição e subtração"></ChapiterButton>
            <ChapiterButton title="Capitulo 2" description=""></ChapiterButton>
            <ChapiterButton title="Capitulo 3" description=""></ChapiterButton>
            <h1 className="text-4xl">Intermediário</h1>
            <ChapiterButton title="Capitulo 1" description=""></ChapiterButton>
            <ChapiterButton title="Capitulo 2" description=""></ChapiterButton>
            <ChapiterButton title="Capitulo 3" description=""></ChapiterButton>
            <h1 className="text-4xl">Avançado</h1>
            <ChapiterButton title="Capitulo 1" description=""></ChapiterButton>
            <ChapiterButton title="Capitulo 2" description=""></ChapiterButton>
            <ChapiterButton title="Capitulo 3" description=""></ChapiterButton>
          </div>
      </div>
    </> 
  )
}