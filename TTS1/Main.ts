import {Serie} from './serie';
import {dataSeries} from './data.js';
let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
let seriesDiv : HTMLElement = document.getElementById('promedio')!; // Nodo div que tiene el id="coursesDiv"
renderSeriesInTable(dataSeries);  
renderMeaninDoc(dataSeries); 

function renderSeriesInTable(series:Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.num}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);

  });
}

function renderMeaninDoc(series:Serie[]): void {
  let mean = 0;
  series.forEach(c => {
    mean += c.seasons;
  });
  mean = mean/series.length;
  let divElement = document.createElement("div");
  divElement.innerHTML = `<p>El promedio de temporadas es: ${mean}</p>`;
  seriesDiv.appendChild(divElement);
}