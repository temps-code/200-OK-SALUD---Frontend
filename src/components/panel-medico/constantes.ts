import L from "leaflet";

export const hospitales = [
  { nombre: "Hospital San Juan de Dios", lat: -21.5355, lng: -64.7296 },
  { nombre: "Hospital Regional", lat: -21.5400, lng: -64.7350 },
];

export const iconoMarcador = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});