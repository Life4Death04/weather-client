import axios from 'axios';
import type { GeocodingResponse } from '../types';
const apiKey = import.meta.env.VITE_GEOCODE_API_KEY;
const apiUrl = import.meta.env.VITE_GEOCODING_URL;


export async function fetchGeocoding(query: string): Promise<GeocodingResponse> {
    try {
        const rawResponse = await axios.get(`${apiUrl}?q=${query}&key=${apiKey}`);
        const coords: GeocodingResponse['coords'] = rawResponse.data.results[0].geometry;
        const location: GeocodingResponse['location'] = {
            country: rawResponse.data.results[0].components.country,
            city: rawResponse.data.results[0].components.city
        };
        return { coords, location };
    } catch (error) {
        if(axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Error fetching geocoding data`);
        } else {
            throw new Error('An unexpected error occurred while fetching geocoding data');
        }
    }
}