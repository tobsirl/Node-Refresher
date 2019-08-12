/* eslint-disable */
console.log('Hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoidG9ic2lybCIsImEiOiJjano4Mno2MjIxMWNkM25vNmpsbXlqbmZrIn0.QABta77PgnY0xTlVDR9kgg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
