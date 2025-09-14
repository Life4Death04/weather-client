// Geocoding API client
// - Uses OpenCage Data (VITE_GEOCODING_URL + VITE_GEOCODE_API_KEY)
// - Given a free-text query (city name), returns coordinates and basic location info

import axios from 'axios';
import type { GeocodingResponse } from '../types';

// Environment variables are provided by Vite at build time.
// Do not commit secrets; .env is gitignored.
const apiKey = import.meta.env.VITE_GEOCODE_API_KEY;
const apiUrl = import.meta.env.VITE_GEOCODING_URL;

/**
 * fetchGeocoding
 * Resolves the first geocoding match for a user-provided query.
 *
 * Contract
 * - Input: query (e.g., "London", "San Francisco")
 * - Output: { coords: { lat, lng }, location: { country, city } }
 * - Errors: throws Error with a readable message (Axios error first)
 * @param query - Free-text location query (e.g., "London")
 * @returns GeocodingResponse with coordinates and location info. { coords, location }
 */
export async function fetchGeocoding(query: string): Promise<GeocodingResponse> {
  try {
    // Note: api expects q and key query params
    const rawResponse = await axios.get(`${apiUrl}?q=${query}&key=${apiKey}`);

    // Minimal data we consume across the app (avoid leaking entire API shape)
    const coords: GeocodingResponse['coords'] = rawResponse.data.results[0].geometry;
    const location: GeocodingResponse['location'] = {
      country: rawResponse.data.results[0].components.country,
      city: rawResponse.data.results[0].components.city,
    };

    return { coords, location };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Prefer provider message if present
      throw new Error(error.response?.data?.message || `Error fetching geocoding data`);
    } else {
      throw new Error('An unexpected error occurred while fetching geocoding data');
    }
  }
}