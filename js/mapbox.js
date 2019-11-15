mapboxgl.accessToken = 'pk.eyJ1IjoidGF5c21pdGgyMDE5IiwiYSI6ImNrMmduejVzNjB4NGszYnE4aXVocTJ6N2QifQ.bOYQ6SHNnc0dwUIt4pRXrA';

/* instantiate map */
var map = new mapboxgl.Map({
    container: 'cities-map',                                           // TODO: match container name with HTML
    style: 'mapbox://styles/mapbox/light',
    zoom: 10
    center: [4.899, 52.372]
});

/* draw map and start tracking iss when map loads */
// map.on('load', function() {
//     /* geojson containing iss points */
//     var geojson = {
//         "type": "Feature",
//         "geometry": { "type": "MultiPoint", "coordinates": [] }
//     };
//
//     /* add layer where points are drawn to map */
//     map.addLayer({
//         'id': 'iss-path',
//         'type': 'circle',
//         'source': { 'type': 'geojson', 'data': geojson },
//         'layout': {},
//         'paint': { 'circle-color': '#FFFFFF', 'circle-blur': 0.5 }
//     });
//
//     let xhr = new XMLHttpRequest();		/* new xhr request */
//     xhr.responseType = 'json';
//     var coordinatePairs = 0;
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             let iss = xhr.response;
//             let lngLat = [iss.longitude, iss.latitude];
//             geojson.geometry.coordinates[coordinatePairs++ % 3000] = lngLat;	/* limits # of points drawn to ~3 orbits */
//             map.easeTo({'center': lngLat});					/* re-center map on newest point */
//             map.getSource('iss-path').setData(geojson);		/* draw new points */
//         }
//     };
//
//     /* set interval to pull new iss point and refresh map every 3.5 secs */
//     window.setInterval(() => {
//         xhr.open('GET', 'https://api.wheretheiss.at/v1/satellites/25544');
//         xhr.send();
//     }, 3500);
// });
