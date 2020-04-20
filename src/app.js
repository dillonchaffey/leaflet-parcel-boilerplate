import User from './components/User';
import Header from './components/Header';
import LeafletMap from './components/LeafletMap';

import './scss/app.scss';

const app = async () => {
  document.getElementById('header').innerHTML = Header();
  // document.getElementById('user').innerHTML = await User();
  LeafletMap('leaflet-map-container');
};


// Load app
app();
