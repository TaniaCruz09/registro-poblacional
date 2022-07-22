import { Contenedor } from "./registroEstadisticaPoblacional";
import { estadisticaPobacional } from "./registroEstadisticaPoblacional";

function mayorPoblacion() {
  const array: number[] = estadisticaPobacional.map(
    (value: Contenedor) => value[2022]
  );
  const maximo: number = Math.max(...array);
  const resultado: Contenedor[] = estadisticaPobacional.filter(
    (value: Contenedor) => value[2022] === maximo
  );
  return resultado;
}

function menorPoblacion() {
  const array: number[] = estadisticaPobacional.map(
    (value: Contenedor) => value[2022]
  );
  const minimo: number = Math.min(...array);
  const resultado: Contenedor[] = estadisticaPobacional.filter(
    (value: Contenedor) => value[2022] === minimo
  );
  return resultado;
}

function ciudadesOrdenadas() {
  const array: string[] = estadisticaPobacional.map(
    (value: Contenedor) => value.name
  );
  const resultado = array.sort();
  return resultado;
}

function ordenadasAscendenteSegunPoblacion() {
  const resultado = estadisticaPobacional.sort((a, b) => b[2022] - a[2022]);
  return resultado;
}

console.log("La ciudad con mayor poblacion es:", mayorPoblacion());
console.log("La ciudad con menor poblacion es:", menorPoblacion());
console.log("La ciudades ordenadas alfabeticamente:", ciudadesOrdenadas());
console.log(
  "Las ciudades ordenadas de mayor a menor cantidad de poblacion:",
  ordenadasAscendenteSegunPoblacion()
);
