import axios from 'axios';
import type { WeatherResult } from '../types';
const apiUrl = import.meta.env.VITE_WEATHER_URL;

export async function fetchWeather(latitude: number, longitude: number): Promise<WeatherResult> {
    const params = `?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code&format=json`;

    try {
        const rawResponse = await axios.get(`${apiUrl}${params}`);
        const response = rawResponse.data;
        console.log(response);
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Error fetching weather data`);
        } else {
            throw new Error('An unexpected error occurred while fetching weather data');
        }
    }
}