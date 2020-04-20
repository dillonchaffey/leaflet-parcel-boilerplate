import '../../node_modules/leaflet/dist/leaflet.css';

import '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import '../../node_modules/leaflet/dist/images/marker-shadow.png';

import '../../node_modules/leaflet/dist/leaflet';

import axios from "axios";

const LeafletMap = async (mapClassName) => {
  let mapContainerEls = document.getElementsByClassName(mapClassName);

  for (let containerEl of mapContainerEls) {
    const mapLocationText = containerEl.dataset.map_location;
    const geocodeUrl = encodeURI('https://api.mapbox.com/geocoding/v5/mapbox.places/'+mapLocationText+'.json?access_token=pk.eyJ1IjoiZGlsbG9uLWRyb25lIiwiYSI6ImNrN3J6ZzlmdzBkdXgzZW5yeGVtYnVqYjkifQ.6px95nykLjyGtFlBdbsZ7w')
    const res = await axios.get(geocodeUrl);
    let mapInitCoords = res.data.features[0].geometry.coordinates;
    //swap lat / lng
    [mapInitCoords[0], mapInitCoords[1]] = [mapInitCoords[1], mapInitCoords[0]];

    let mymap = L.map(containerEl).setView(mapInitCoords, 13);

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
