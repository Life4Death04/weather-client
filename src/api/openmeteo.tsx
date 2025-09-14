import axios from 'axios';
const apiUrl = import.meta.env.VITE_WEATHER_URL;

type WeatherResult = {
    current: {
        interval: number;
        relative_humidity_2m: number;
        temperature_2m: number;
        time: Date;
        weather_code: number;
    },
    current_units: {
        interval: string;
        relative_humidity_2m: string;
        temperature_2m: string;
        time: string;
        weather_code: string;
    },
    daily: {
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        time: Date[];
        weather_code: number[];
    },
    daily_units: {
        temperature_2m_max: string;
        temperature_2m_min: string;
        time: string;
        weather_code: string;
    },
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}

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