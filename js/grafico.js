//funcion que arma y muestra el grafico
export function verGrafico(data) {
    const inteligencia = data.powerstats.intelligence,
          fuerza = data.powerstats.strength,
          velocidad = data.powerstats.speed,
          resistencia = data.powerstats.durability,
          poder = data.powerstats.power,
          combate = data.powerstats.combat;
          
    const nombre = data.name

    let chart = new CanvasJS.Chart("poderHero", {
        theme: "dark1",
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Estadisticas de poder para " + nombre
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: inteligencia, label: "Inteligencia" },
                { y: fuerza, label: "Fuerza" },
                { y: velocidad, label: "Velocidad" },
                { y: resistencia, label: "Resistencia" },
                { y: poder, label: "Poder" },
                { y: combate, label: "Combate" }
            ]
        }]
    });
     chart.render();
}