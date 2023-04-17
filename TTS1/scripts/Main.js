import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var seriesDiv = document.getElementById('promedio'); // Nodo div que tiene el id="coursesDiv"
renderSeriesInTable(dataSeries);
renderMeaninDoc(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.num, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderMeaninDoc(series) {
    var mean = 0;
    series.forEach(function (c) {
        mean += c.seasons;
    });
    mean = mean / series.length;
    var divElement = document.createElement("div");
    divElement.innerHTML = "<p>El promedio de temporadas es: ".concat(mean, "</p>");
    seriesDiv.appendChild(divElement);
}
