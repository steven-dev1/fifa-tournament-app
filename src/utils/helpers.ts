import { DataForm, NavLinks } from "@/types/types";

export const navlinks: NavLinks[] = [
    {
        route: "/partidos",
        label: "Partidos",
    },
    {
        route: "/estadisticas",
        label: "Estadisticas",
        icon: "<BsBarChartFill />"
    },
    {
        route: "/participantes",
        label: "Participantes"
    },
]


export const towers: number[] = Array.from({ length: 14 }, (_, i) => i + 1); // [1, 2, ..., 14]
export const generateApartments = () =>
  Array.from({ length: 5 }, (_, floor) =>
    Array.from({ length: 5 }, (_, apt) => (floor + 1) * 100 + (apt + 1))
  ).flat();


export const handleRegister = (e: React.FormEvent<HTMLFormElement>, dataForm: DataForm) => {
    e.preventDefault();
    try {
        const data = fetch('/api', {
            method: "POST",
            body: JSON.stringify(dataForm),
        })
        data.then(data => data.json())
            .then(data => console.log(data))
    } catch (e) {
        console.log(e)
    }
};