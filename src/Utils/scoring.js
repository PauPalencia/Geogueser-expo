// src/Utils/scoring.js
// Utilidades para calcular distancia y puntuación.


// Haversine formula -> devuelve distancia en kilometros
export function distanceKm(lat1, lon1, lat2, lon2) {
const toRad = (v) => (v * Math.PI) / 180;
const R = 6371; // radio de la tierra en km
const dLat = toRad(lat2 - lat1);
const dLon = toRad(lon2 - lon1);
const a =
Math.sin(dLat / 2) * Math.sin(dLat / 2) +
Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
Math.sin(dLon / 2) * Math.sin(dLon / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
return R * c;
}


// Puntuación: 0 - 10000 por pregunta
// Usamos como distancia máxima 20037.5 km (aprox. mitad de circunferencia terrestre)
export function scoreFromDistanceKm(distKm) {
const maxDist = 20037.5;
const raw = Math.round(10000 * (1 - distKm / maxDist));
return Math.max(0, raw);
}