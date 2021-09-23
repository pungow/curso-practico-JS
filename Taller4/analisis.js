function esPar(num) {
    return (num % 2 === 0);
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1  = lista[mitad -1];
        const personaMitad2  = lista[mitad];        
        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;    
    }
}

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort (
    function (SalaryA, SalaryB) {
        return SalaryA - SalaryB;
    }
);

//mediana general
const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana top 10%
const spliceStart = salariosColSorted.length * .9;
const spliceCount = salariosColSorted - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);

 console.log({
    medianaGeneralCol,
    medianaTop10Col,
 })