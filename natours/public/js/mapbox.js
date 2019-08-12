/* eslint-disable */
console.log('Hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoidG9ic2lybCIsImEiOiJjano4Mno2MjIxMWNkM25vNmpsbXlqbmZrIn0.QABta77PgnY0xTlVDR9kgg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/tobsirl/cjz860kko3egm1co29aiyt695'
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);
});
