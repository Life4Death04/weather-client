// Weather API client (Open-Meteo)
// - Requests current and daily forecast values
// - Uses JSON format via axios to keep a plain JS response shape

import axios from 'axios';
import type { WeatherResult } from '../types';

const apiUrl = import.meta.env.VITE_WEATHER_URL;

/**
 * fetchWeather
 * Fetches weather data for a set of coordinates.
 *
 * @param latitude - Latitude of the location
 * @param longitude - Longitude of the location
 * @return WeatherResult with current weather and daily forecast
 *
 * Notes
 * - We explicitly request `format=json` to avoid FlatBuffers (binary) responses
 *   and keep consumption simple across the app.
 */
export async function fetchWeather(latitude: number, longitude: number): Promise<WeatherResult> {
    // Open-Meteo expects comma-separated lists for daily/current when using JSON
    const params = `?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&format=json`;

    try {
        const rawResponse = await axios.get(`${apiUrl}${params}`);
        const response = rawResponse.data;
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Error fetching weather data`);
        } else {
            throw new Error('An unexpected error occurred while fetching weather data');
        }
    }
}