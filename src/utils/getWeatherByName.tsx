import { fetchGeocoding } from '../api/geocoding';
import { fetchWeather } from '../api/openmeteo';
import type { GeocodingResponse, WeatherResult } from '../types';

export async function getWeatherByName(cityName: string): Promise<WeatherResult> {
    const query = cityName.trim();
    if (!query) throw new Error('City name cannot be empty');

    const coords: GeocodingResponse = await fetchGeocoding(query);
    if (!coords) throw new Error('Could not get coordinates');

    const weather: WeatherResult = await fetchWeather(coords.lat, coords.lng);
    if (!weather) throw new Error('Could not get weather data');

    return weather;
}