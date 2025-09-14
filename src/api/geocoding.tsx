import axios from 'axios';
const apiKey = import.meta.env.VITE_GEOCODE_API_KEY;
const apiUrl = import.meta.env.VITE_GEOCODING_URL;

type GeocodingResponse = {
    lat: number;
    lng: number;
}

export async function fetchGeocoding(query: string): Promise<GeocodingResponse> {
    try {
        const rawResponse = await axios.get(`${apiUrl}?q=${query}&key=${apiKey}`);
        const response = rawResponse.data.results[0].geometry;
        console.log(response);
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Error fetching geocoding data`);
        } else {
            throw new Error('An unexpected error occurred while fetching geocoding data');
        }
    }
}