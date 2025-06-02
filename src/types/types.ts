export interface Coordinates {
  lat: string;
  lng: string;
}

export interface Posta {
  name: string;
  address: string;
  coordinates: Coordinates;
  hours: string[];
  specialties: string[];
  services: string[];
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface PostasData {
  postas: Posta[];
}