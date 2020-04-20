import '../../node_modules/leaflet/dist/leaflet.css';

import '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import '../../node_modules/leaflet/dist/images/marker-shadow.png';

import '../../node_modules/leaflet/dist/leaflet';

const LeafletMap = (mapClassName) => {
  let mapContainerEls = document.getElementsByClassName(mapClassName);

  for (let containerEl of mapContainerEls) {
    let mymap = L.map(containerEl).setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);
  }
}


export default LeafletMap;
