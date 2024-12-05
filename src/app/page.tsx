import MaxWidth from "@/components/MaxWidth";
import VideoHeader from "@/components/VideoHeader";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <VideoHeader />
      <MaxWidth className="flex flex-col my-4 p-2 md:p-4 justify-center items-center">
        <h4 className="text-black text-lg md:text-2xl md:font-bold font-semibold">Reglas</h4>
        <div className="w-full p-3 md:p-0 md:w-1/2 2xl:w-2/3 3xl:w-full mb-2">
          <h4 className="p-2 text-black font-bold md:text-lg">1. Formato del Torneo</h4>
          <ul className="ml-6 text-xs md:text-sm flex flex-col gap-1">
            <li><strong>Modo de juego:</strong> El modo de juego será 1v1.</li>
            <li><strong>Todos contra todos:</strong> En caso de haber menos de 32 participantes la primera fase será un todos contra todos en los que clasificarán los 8 primeros. En caso de haber 32 participantes (cantidad máxima) se jugarán Fase de Grupos, donde clasificaran los 2 primeros de cada grupo.</li>
            <li><strong>Eliminación directa:</strong> La segunda fase será de eliminatorias, se sortearán los clasificados de la primera fase y jugarán octavos o cuartos de final, dependiendo del formato de la primera fase.</li>
            <li><strong>Duración de los partidos:</strong> 10 minutos cada tiempo.</li>
          </ul>
        </div>
        <div className="w-full p-3 md:p-0 md:w-1/2 2xl:w-2/3 3xl:w-full mb-2">
          <h4 className="p-2 text-black font-bold md:text-lg">2. Configuración del partido</h4>
          <ul className="ml-6 text-xs md:text-sm flex flex-col gap-1">
            <li><strong>Controles:</strong> Clásicos o alternativos, según preferencia del jugador.</li>
            <li><strong>Equipos permitidos:</strong> Solo equipos de clubes/nacionales, no se permiten equipos personalizados.</li>
          </ul>
        </div>
        
      </MaxWidth>
    </main>
  );
}
